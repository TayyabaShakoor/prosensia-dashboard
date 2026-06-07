"use client";

// ❌ POORLY CODED - DESKTOP ONLY
// Fixed widths, no responsive classes, overflows on mobile

export default function DesktopOnlyDashboard() {
  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Sidebar - fixed width */}
        <div style={{ width: "250px", background: "#1e293b", color: "white", padding: "20px" }}>
          <h3>Sidebar</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* Main content - fixed width cards */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "nowrap", overflowX: "scroll" }}>
            <div style={{ minWidth: "300px", background: "#f1f5f9", padding: "20px", borderRadius: "8px" }}>
              <h3>Card 1</h3>
              <p>Fixed width card that breaks on mobile</p>
            </div>
            <div style={{ minWidth: "300px", background: "#f1f5f9", padding: "20px", borderRadius: "8px" }}>
              <h3>Card 2</h3>
              <p>Horizontal scroll required on small screens</p>
            </div>
            <div style={{ minWidth: "300px", background: "#f1f5f9", padding: "20px", borderRadius: "8px" }}>
              <h3>Card 3</h3>
              <p>Bad user experience on mobile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}