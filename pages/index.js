const githubLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#ffffff"
    viewBox="0 0 256 256"
  >
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
  </svg>
);

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>BibleTab</h1>
        <p
          style={{
            marginTop: "-1rem",
          }}
        >
          Um lugar massa para poder compartilhar experiências com a Palavra de
          Deus!
        </p>

        <p style={{ width: "50%", fontSize: "0.875rem", marginTop: "0.25rem" }}><span style={{ position: "relative", top: "-0.25rem", marginRight: "0.25rem" }}>19</span>Animem uns aos outros com salmos, hinos e canções espirituais. Cantem, de todo o coração, hinos e salmos ao Senhor. <span style={{ position: "relative", top: "-0.25rem", marginRight: "0.25rem" }}>20</span>Em nome do nosso Senhor Jesus Cristo, agradeçam sempre todas as coisas a Deus, o Pai.</p>

        <span style={{ fontSize: "0.875rem" }}>Efésios 5:19-20 NTLH</span>
      </div>

      <a
        href="https://github.com/Poveii/clone-tabnews"
        style={{
          backgroundColor: "rgb(51, 51, 51)",
          color: "#e6edf3",
          textDecoration: "none",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "0.25rem",
          marginTop: "0.75rem",
        }}
      >
        {githubLogo}
        Github
      </a>
    </div>
  );
}

export default Home;
