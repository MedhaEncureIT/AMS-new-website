import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(["/platform", "/solutions", "/modules", "/resources", "/why-astitva", "/about", "/request-demo", "/contact", "/login", "/privacy", "/terms"])("matches the website page %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes(path);
    expect(matches.at(-1)?.routeId).toBe(path === '/platform' ? '/platform/' : path);
  });
  it.each(['asset-tracking', 'asset-lifecycle', 'location-management', 'user-ownership', 'audit-compliance', 'reports-insights'])('matches the platform feature %s', (feature) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes(`/platform/${feature}`);
    expect(matches.at(-1)?.routeId).toBe('/platform/$feature');
    expect(matches.at(-1)?.params).toMatchObject({ feature });
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
