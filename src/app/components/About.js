import { STRINGS } from "../constants/strings";

export default function About() {
  return (
    <div>
        <p className="mt-2">{STRINGS.about.intro}</p>
        <p className="mt-2">{STRINGS.about.school}</p>
        <p className="mt-2">{STRINGS.about.internship}</p>
        <p className="mt-2">{STRINGS.about.freetime}</p>
    </div>
  );
}