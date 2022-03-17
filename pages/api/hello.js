// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const url = "https://wavepagestorage.blob.core.windows.net/audiofiles/";

export const PhraseObjs = [
  {
    text_de: "Du hast schöne Schuhe.",
    audioUrl: `${url}d-45390.mp3`,
  },
  {
    text_de: "Das ist perfekt! Wir werden zusammen gehen!",
    audioUrl: `${url}d-24357.mp3`,
  },
  {
    text_de: "Ich praktiziere Yoga jeden Tag.",
    audioUrl: `${url}d-152.mp3`,
  },
  {
    text_de: "Kann ich Ihnen helfen?",
    audioUrl: `${url}d-36782.mp3`,
  },
  {
    text_de: "Schöne Jacke! Ich liebe gelbe Farbe.",
    audioUrl: `${url}d-57059.mp3`,
  },
  {
    text_de: "Möchtest du tanzen?",
    audioUrl: `${url}d-80899.mp3`,
  },
  {
    text_de: "Du weißt, dass ich dich liebe.",
    audioUrl: `${url}d-12886.mp3`,
  },
  {
    text_de: "Sie trägt schwarze Kleidung",
    audioUrl: `${url}d-33351.mp3`,
  },
];

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
