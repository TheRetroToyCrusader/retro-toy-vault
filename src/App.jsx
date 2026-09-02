export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1>🧸 Retro Toy Vault</h1>

      <h2>My Collection</h2>
      <ul>
        <li>✅ He-Man</li>
        <li>✅ Skeletor</li>
      </ul>

      <h2>Still Needed</h2>
      <ul>
        <li>❌ Man-At-Arms</li>
        <li>❌ Beast Man</li>
        <li>❌ Teela</li>
        <li>❌ Battle Cat</li>
      </ul>

      <p>
        Collection Progress: 33%
      </p>
    </div>
  );
}