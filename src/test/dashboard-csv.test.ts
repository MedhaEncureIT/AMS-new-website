import { describe, expect, it } from 'vitest';
import { serializeCsv } from '@/lib/dashboard-csv';

describe('Dashboard CSV', () => {
  it('quotes commas, newlines and quotes and preserves Indian names and arrows', () => {
    expect(serializeCsv([['Rahul Sharma', 'Mumbai HQ → Pune Office', 'A, "B"\nC', 42]]))
      .toBe('\uFEFF"Rahul Sharma","Mumbai HQ → Pune Office","A, ""B""\nC","42"\r\n');
  });
  it('prevents spreadsheet formulas without changing numeric values', () => {
    expect(serializeCsv([['=SUM(A1)', ' +123', '@cmd', '-text', -5]]))
      .toBe('\uFEFF"\'=SUM(A1)","\' +123","\'@cmd","\'-text","-5"\r\n');
  });
  it('keeps headers in empty exports', () => {
    expect(serializeCsv([['Activity', 'Location']])).toContain('"Activity","Location"');
  });
});