// pages/index.tsx
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const defaultLayout = {
  "rows": [
    {
      "style": {},
      "sections": [
        {
          "style": { "flex": 3 },
          "cards": [
            {
              "type": "TextBlock",
              "text": "Main Content",
              "size": "extraLarge",
              "style": { "marginBottom": "16px" }
            },
            {
              "type": "TextBlock",
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
              "style": { "marginBottom": "8px" }
            }
          ]
        },
        {
          "style": { "flex": 1 },
          "cards": [
            {
              "type": "TextBlock",
              "text": "Vertical Sidebar",
              "size": "large",
              "style": { "marginBottom": "16px" }
            },
            {
              "type": "TextBlock",
              "text": "Sidebar item 1",
              "style": { "marginBottom": "8px" }
            },
            {
              "type": "TextBlock",
              "text": "Sidebar item 2",
              "style": { "marginBottom": "8px" }
            },
            {
              "type": "TextBlock",
              "text": "Sidebar item 3",
              "style": { "marginBottom": "8px" }
            }
          ]
        }
      ]
    }
  ]
}
;

export default function Home() {
  const [layoutJSON, setLayoutJSON] = useState(defaultLayout);

  useEffect(() => {
    // You can load the layout JSON from an external source here, if needed
    // For example, from an API or a file
  }, []);

  return (
    <div>
      <Layout layoutJSON={layoutJSON} />
    </div>
  );
}
