export type CsvCell = string | number;

// Quote every cell, preserve Unicode, and neutralize spreadsheet formulas.
export function serializeCsv(rows: readonly (readonly CsvCell[])[]): string {
  return '\uFEFF' + rows.map(row => row.map(cell => {
    const text = String(cell);
    const safe = typeof cell === 'string' && /^[\s]*[=+@-]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  }).join(',')).join('\r\n') + '\r\n';
}

export function downloadCsv(filename: string, rows: readonly (readonly CsvCell[])[]) {
  const url = URL.createObjectURL(new Blob([serializeCsv(rows)], { type: 'text/csv;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}