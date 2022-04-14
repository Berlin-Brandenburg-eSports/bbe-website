import classNames from 'classnames';
import { NextPage } from 'next';
import Button from '../../components/Button';
import BaseTemplate from '../../templates/BaseTemplate';

const ContributionRegulationsPage: NextPage = () => {
  return (
    <BaseTemplate>
      <div className={classNames('container', 'document')}>
        <h1>Beitragsordnung des Berlin-Brandenburg eSports e.V.</h1>
        <section id="1">
          <h1>§1 Grundsatz</h1>
          <p>
            Diese Beitragsordnung ist nicht Bestandteil der Satzung, sondern erfüllt die nach §5.1.5 (b), §7.4.(g) und 8.1.2 (j) der
            Vereinssatzung erforderliche Regelung der Beitragspflichten der Mitglieder sowie der Gebühren und Umlagen. Sie wird vom Vorstand
            des Vereins erstellt und angepasst. Anschließend wird sie von der Mitgliederversammlung erlassen. Die Beitragsordnung kann nur
            vom Vorstand geändert werden
          </p>
        </section>
        <section id="2">
          <h1>§2 Beitrag</h1>
          <ol>
            <li>
              Der monatliche Beitrag ist von dem jeweiligen Mitgliedsstatus abhängig
              <ol>
                <li>aktive Mitglieder: 5€</li>
                <li>teilhabende Mitglieder: beitragsfrei</li>
                <li>
                  ermäßigte aktive Mitglieder: 3 €<br />
                  (unter 16 Jahren, Studierende, Auszubildende, Schüler:innen, Menschen mit körperlichen und/oder geistigen
                  Beeinträchtigungen, Rentner:innen und Arbeitssuchende)
                </li>
                <li>Ehrenmitglieder: beitragsfrei</li>
              </ol>
            </li>
            <li>Es wird für die Mitgliedschaft keine Aufnahmegebühr erhoben.</li>
            <li>Für die Beitragshöhe ist der am Fälligkeitstag bestehende Mitgliederstatus maßgebend.</li>
            <li>
              Der jeweilige monatliche Beitrag kann durch das zahlende Mitglied jederzeit freiwillig erhöht werden. Die Dauer und Summe der
              Erhöhung sind dem Vorstand in Textform mitzuteilen.
            </li>
            <li>
              Der Vorstand ist ermächtigt, Beiträge auf Antrag zu stunden, zu ermäßigen oder zu erlassen. Ein Rechtsanspruch auf
              Ratenzahlung und/oder Stundung der Beitragsschuld besteht nicht.
            </li>
            <li>
              Eine Ermäßigung des Beitrags erfolgt auf Antrag durch eine mit entsprechenden Unterlagen versehene Begründung. Über die
              Gewährung der Ermäßigung entscheidet der Vorstand.
            </li>
            <li>
              Der Erlass des Beitrags im Härtefall kann für die Dauer eines Jahres einstimmig durch den Vorstand entschieden werden und muss
              durch das betroffene Mitglied glaubhaft gemacht werden
            </li>
          </ol>
        </section>
        <section id="3">
          <h1>§3 Fälligkeit</h1>
          <ol>
            <li>Der Beitrag wird grundsätzlich quartalsweise erhoben und zum 15. Kalendertag des ersten Monats eines Quartals fällig</li>
            <li>
              Die festgesetzten Beträge werden erstmals im nachfolgenden Monat auf die Bewilligung des Aufnahmeantrags zum regulären
              Fälligkeitstermin erhoben. Durch Beschluss der Mitgliederversammlung kann ein anderer regulärer Termin festgelegt werden.
            </li>
            <li>
              Der Zahlungsturnus kann auf Antrag des Mitgliedes wie folgt angepasst werden
              <ol>
                <li>monatliche Zahlung zum 15. Kalendertag des Monats</li>
                <li>halbjährliche Zahlung zum 15. Kalendertag des ersten Monats des Halbjahres</li>
                <li>jährliche Zahlung zum 15. Kalendertag des ersten Monats des Jahres.</li>
              </ol>
            </li>
            <li>
              Änderungen der persönlichen Angaben sind dem Vorstand unverzüglich mitzuteilen, insbesondere bei Änderung der Mitgliedschaft
              und beim Austritt aus dem Verein. Änderungen, die dem Vorstand erst nach dem 15. Tag eines Kalendermonats zugehen, können erst
              bei der Zahlung im darauf folgenden Monat berücksichtigt werden.
            </li>
          </ol>
        </section>
        <section id="4">
          <h1>§4 Zahlungsweise</h1>
          <ol>
            <li>
              Mitglieder können den Mitgliedsbeitrag selbstständig im vereinbarten Zahlungsturnus überweisen oder durch Einrichtung eines
              SEPA-Lastschriftmandats quartalsweise ausnahmsweise halbjährlich oder jährlich begleichen
            </li>
            <li>
              Das Mitglied verpflichtet sich bei Einrichtung eines SEPA-Lastschriftmandats für ausreichende Deckung des Buchungskontos zum
              Zahlungstermin zu sorgen. Weiterhin verpflichtet sich das Mitglied bei einem Kontowechsel zur rechtzeitigen Neueinrichtung
              eines SEPA-Lastschriftmandats.
            </li>
            <li>Das Mitglied muss bei gewünschter Zahlungsweise durch Abbuchung ein SEPALastschriftmandat für die Abbuchung erteilen.</li>
            <li>
              Weist das Konto eines Mitglieds zum Zeitpunkt der Abbuchung des Beitrages oder sonstiger Kosten keine Deckung auf, so haftet
              das Mitglied dem Verein gegenüber für sämtliche dem Verein mit der Beitragseinziehung sowie eventuelle Rücklastschriften
              entstehende Kosten. Dies gilt auch für den Fall, dass ein bezogenes Konto erloschen ist und das Mitglied dies dem Verein nicht
              mitgeteilt hat.
            </li>
          </ol>
        </section>
        <section id="5">
          <h1>§5 Umlagen oder Sachleistungen</h1>
          <p>
            Es können Umlagen und/oder Sachleistungen von den Mitgliedern erhoben werden. Die Erhebung von Umlagen und/oder Sachleistungen
            muss von der Mitgliederversammlung beschlossen werden.
          </p>
        </section>
        <section id="6">
          <h1>§6 Salvatorische Klausel</h1>
          <p>
            Sollte sich eine einzelne Bestimmung dieser Ordnung als unwirksam herausstellen, so bleibt die Wirksamkeit der übrigen
            Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt diejenige rechtswirksame Regelung als gewollt und erklärt, die
            den Sinn und Zweck der unwirksamen Bestimmung und der gesamten Ordnung unter Berücksichtigung von Treu und Glauben am nächsten
            kommt und den allgemeinen Grundsätzen des Vereinsrechts entspricht.
          </p>
        </section>
        <section id="7">
          <h1>§7 Schlussbestimmungen</h1>
          <ol>
            <li>
              Diese Beitragsordnung wurde durch die Gründungsversammlung am 18.09.2021 beschlossen und tritt mit dem gleichen Tage in Kraft.
            </li>
            <li>Alle älteren Beitragsordnungen treten hiermit außer Kraft.</li>
          </ol>
        </section>
        <Button href="/docs/bbe-beitragsordnung.pdf" download>
          Download
        </Button>
      </div>
    </BaseTemplate>
  );
};

export default ContributionRegulationsPage;
