import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Modern Times",
  "date": "7/28/2017"
};
const Modern_times = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>As the TV gets louder so too does my internal monologue<br>
Spouting truisms and narrating the crucifixion of personality<br>
I condemn the heretics from my unlikely castle<br>
Trading criticism for real news, adjusting to the outrage</p>
<p>The ocean burns softly and penguins light up their cigarettes<br>
Two packs a day, now that the doctors have all flown south<br>
The mountain goats sport suntans<br>
And perfect the art of the slip-and-slide</p>
<p>My world has dissolved into a parody of itself<br>
Talking behind it’s own back and dissolving the fourth wall<br>
Asking:<br>
How long have you known?</p>`;
});
export {
  Modern_times as default,
  metadata
};
