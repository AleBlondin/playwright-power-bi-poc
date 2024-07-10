import viteLogo from "/vite.svg";
import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <PowerBIEmbed
          embedConfig={{
            type: "dashboard", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            embedUrl: "https://playground.powerbi.com/sampleReportEmbed",
            tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={new Map([])}
          cssClassName={"reportClass"}
          getEmbeddedComponent={() => {}}
        />
      </div>
    </>
  );
}

export default App;
