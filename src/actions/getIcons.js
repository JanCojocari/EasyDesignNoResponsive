import insta from "../Icons/instagram.png";
import fb from "../Icons/facebook.png";
import telega from "../Icons/telegram.png";
import tik from "../Icons/tiktok.png";

function instagram() {
   return <img src={insta} alt="Instagram" />;
}

function facebook() {
   return <img src={fb} alt="Facebook" />;
}

function telegram() {
   return <img src={telega} alt="Telegram" />;
}

function tiktok() {
   return <img src={tik} alt="TikTok" />;
}

export default {
   tiktok: tiktok,
   telegram: telegram,
   facebook: facebook,
   instagram: instagram,
};
