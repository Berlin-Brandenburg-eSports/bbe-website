import classNames from 'classnames';
import { NextPage } from 'next';
import Button from '../components/Button';
import BaseTemplate from '../templates/BaseTemplate';

const StatutePage: NextPage = () => {
  return (
    <BaseTemplate>
      <div className={classNames('container', 'document')}>
        <header>
          <h1>Satzung des Vereins Berlin-Brandenburg eSports</h1>
          <h2>in der Fassung vom 18. September 2021</h2>
          <h3>durch die konstituierende Mitgliederversammlung</h3>
          <h4>
            Oguzhan Celik, Michael Dellermann, Jakob Dötter, Justine Knoll, Duc Phan Anh Le, Clara Phu-Nhat-Mi Ngo, Erin Sprünken, Fabian
            Thielmann
          </h4>
        </header>
        <section id="0">
          <h1>Präambel</h1>
          <p>
            Der Verein macht es sich zur Aufgabe, maßgeblich an der (Jugend-)Förderung des eSports in und um Berlin beteiligt zu sein. Der
            Verein hat sich naturgemäß als Vertreter der Studierendenschaft der Berliner Hochschulen gegründet und strebt an, die Interessen
            der Vereinsmitglieder in wettbewerblicher und gesamtgesellschaftlicher Hinsicht in den Bundesländern Berlin und Brandenburg zu
            vertreter, um eine umfassende persönliche Entfaltung der eigenen Interessen zu fördern. Der Verein vertritt den Grundsatz der
            parteipolitischen und religiösen Neutralität und wendet sich gegen Intoleranz, Rassismus und jede Form des politischen
            Extremismus.
          </p>
        </section>
        <section id="1">
          <h1>§1 Name, Sitz und Geschäftsjahr</h1>
          <ol>
            <li>
              Der Verein führt den Namen &bdquo;Berlin-Brandenburg eSports&ldquo;. Er soll in das Vereinsregister eingetragen werden und
              trägt danach den Zusatz &bdquo;e.V.&ldquo;
            </li>
            <li>Der Verein hat seinen Sitz in Berlin.</li>
            <li>
              Das Geschäftsjahr des Vereins ist das Kalenderjahr und wird als Rumpfjahr geführt. Das erste Geschäftsjahr des Vereins beginnt
              2021.
            </li>
          </ol>
        </section>
        <section id="2">
          <h1>§2 Zweck des Vereins</h1>
          <ol>
            <li>
              Der Verein hat die Förderung von eSports sowie dessen Ausübung zum Zweck. Ferner setzt sich der Verein für die
              gesellschaftliche Akzeptanz des eSports im Allgemeinen und in besonderem Maße an Hochschulen ein. Der Verein soll eine
              Gemeinschaft für eSports-Interessierte insbesondere, aber nicht ausschließlich, an Hochschulen in Berlin und Umgebung bieten.
            </li>
            <li>
              Der Satzungszweck soll insbesondere durch folgende Maßnahmen verwirklicht werden:
              <ol>
                <li>
                  Nachwuchsförderung und Jugendarbeit im Breitensport: Das gemeinsame eSports-Erlebnis als Community soll im Mittelpunkt des
                  Vereinshandelns stehen. Dies umfasst die allgemeine Förderung des Jugend-/ Erwachsenen-/ Breiten- und Wettkampfsportes im
                  eSports-Bereich durch das Schaffen von Angeboten wie Lehrkursen, Trainingseinheiten sowie der Teilnahme an Turnieren, die
                  zur Kompetenzbildung und Aufklärung junger Menschen dienen. Die geförderten Kompetenzen beinhalten wichtige motorische und
                  geistige Fähigkeiten sowie soziale Kompetenzen. Der Verein dient hierbei als frühe Anlaufstelle für Schüler:innen und
                  Studierende in den eSports-Sektor, wobei stets auf die altersgerechten Spielmodalitäten und Jugendschutzgesetze geachtet
                  wird.
                </li>
                <li>
                  Öffentlichkeits- und Aufklärungsarbeit: Über die Durchführung öffentlicher und betreuter Veranstaltungen sollen die
                  Aufmerksamkeit und die Wahrnehmung des eSports in der Gesellschaft gefördert werden. Hierbei steht die Aufklärung über
                  gesundheitliche und soziale Chancen sowie Risiken des eSports im Vordergrund. Mit Themen wie Suchtgefahren beim Umgang mit
                  Medien und Gaming, Verhaltens- und Fairnessregeln im eSport, Diskriminierung, Inklusion und Integration wird sich folglich
                  kritisch auseinandergesetzt.
                </li>
                <li>
                  Errichtung kompetitiver Strukturen im Bereich eSports: Das gemeinsame eSports-Erlebnis als Community soll zudem durch die
                  Bildung, Unterstützung und Förderung von kompetitiven sowie freizeitlichen eSports-Teams realisiert werden. Hierbei stehen
                  insbesondere die Teilnahme an vereinsinternen Veranstaltungen, aber auch vereinsexternen Turnieren und Ligen im Fokus.
                </li>
              </ol>
            </li>
          </ol>
        </section>
        <section id="3">
          <h1>§3 Gemeinnützigkeit</h1>
          <ol>
            <li>Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne von §§ 51, 52 der Abgabenordnung.</li>
            <li>
              Er ist selbstlos tätig und verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Mittel des Vereins dürfen nur für die
              satzungsmäßigen Zwecke verwendet werden.
            </li>
            <li>
              Die Mitglieder erhalten in ihrer Eigenschaft als Mitglieder keine Zuwendungen aus Mitteln des Vereins. Es darf keine Person
              durch Ausgaben, die den Zwecken des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.
            </li>
          </ol>
        </section>
        <section id="4">
          <h1>§4 Mitgliedschaft</h1>
          <ol>
            <li>Mitglieder können alle natürlichen Personen werden, welche die Ziele des Vereins unterstützen.</li>
            <li>
              Der Verein besteht aus
              <ol>
                <li>Aktiven Mitgliedern. Dies sind Mitglieder, welche aktiv am Vereinsgeschehen teilhaben oder direkt mitarbeiten.</li>
                <li>
                  Teilhabenden Mitgliedern. Dies sind Mitglieder, welche sich nicht aktiv innerhalb des Vereins betätigen. Sie besitzen kein
                  Stimmrecht bezüglich der Mitgliederversammlung, fördern und unterstützen den Verein jedoch in geeigneter Weise.
                </li>
                <li>
                  Ehrenmitglieder. Dies sind Mitglieder, welche sich in besonderer Weise um den Verein verdient gemacht haben. Sie sind
                  grundsätzlich und ungeachtet der Beitragsordnung vom Mitgliedsbeitrag befreit und voll stimmberechtigt. Ehrenmitglied
                  wird,
                  <ol>
                    <li>wer auf Beschluss einer Mitgliederversammlung hierzu ernannt wird.</li>
                    <li>wer durchgehend mindestens 30 Jahre dem Verein angehörte.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </section>
        <section id="5">
          <h1>§5 Erwerb, Änderung und Beendigung der Mitgliedschaft</h1>
          <section id="5.1">
            <h2>§5.1 Erwerb der Mitgliedschaft</h2>
            <ol>
              <li>
                Zur Erlangung der Mitgliedschaft ist ein an den Verein gerichteter Antrag zu stellen. Dies kann ein persönlich
                unterschriebener Antrag sein oder ein vom Verein digital bereitgestelltes Formular.
              </li>
              <li>
                Über den Antrag entscheidet der Vorstand, vertreten durch zwei seiner Mitglieder. Eine Ablehnung bedarf einer mehrheitlichen
                Entscheidung des Gesamtvorstands. Im Falle einer Ablehnung ist der Vorstand nicht verpflichtet, dem Antragsteller die Gründe
                mitzuteilen.
              </li>
              <li>Im Falle einer Annahme beginnt die Mitgliedschaft mit sofortiger Wirkung durch die Aufnahmebestätigung.</li>
              <li>
                Minderjährige Antragsteller:innen bedürfen der Zustimmung der gesetzlichen Vertreter, die dem Verein gegenüber
                gesamtschuldnerisch für die Minderjährigen haften.
              </li>
              <li>
                Mit dem Erwerb der Mitgliedschaft erkennt das Mitglied
                <ol>
                  <li>die geltende Satzung,</li>
                  <li>die geltende Beitragsordnung und</li>
                  <li>den geltenden Verhaltenskodex</li>
                </ol>
                an. Dies schließt auch eine sofortige Zahlung des Beitrags der laufenden Periode gemäß Beitragsordnung ein.
              </li>
              <li>
                Die Mindestdauer einer aktiven Mitgliedschaft beträgt sechs Kalendermonate. Gezählt wird hier mit dem ersten Tag des Monats,
                in dem eine Mitgliedschaft vom Verein bestätigt wurde.
              </li>
            </ol>
          </section>
          <section id="5.1">
            <h2>§5.2 Änderung der Mitgliedschaft</h2>
            <ol>
              <li>Änderungen personenbezogener Daten sind dem Vorstand unverzüglich in Textform mitzuteilen.</li>
              <li>
                Eine Änderung einer teilhabenden Mitgliedschaft in eine aktive Mitgliedschaft ist jederzeit möglich. Damit geht die Pflicht
                zur Zahlung des Beitrags gemäß geltender Beitragsordnung einher, wie auch die geltende Mindestmitgliedschaft für aktive
                Mitglieder.
              </li>
              <li>
                Eine Änderung einer aktiven Mitgliedschaft in eine teilhabende Mitgliedschaft ist unter Einhaltung einer einmonatigen
                Kündigungsfrist sowie der Mindestmitgliedschaft möglich. Die Änderung muss dem Vorstand in Textform mitgeteilt werden. Die
                aktive Mitgliedschaft bleibt bis zum Ende des bereits bezahlten Zeitraumes erhalten, es besteht kein Anspruch auf teilweise
                Rückerstattung.
              </li>
              <li>
                Liegt eine Änderung wie in §5.2.3 innerhalb der ersten zwei Wochen der Mitgliedschaft vor, so erstattet der Verein den
                vollen Beitrag.
              </li>
            </ol>
          </section>
          <section id="5.3">
            <h2>§5.3 Beendigung der Mitgliedschaft</h2>
            <ol>
              <li>Eine Beendigung der Mitgliedschaft ist möglich durch Austritt und durch Ausschluss.</li>
              <li>
                Ein Mitglied kann seinen Austritt gegenüber dem Verein erklären. Hierbei ist eine Einhaltung einer Kündigungsfrist von einem
                Monat vor der nächsten Fälligkeit des Mitgliedsbeitrags zu beachten. Die Austrittserklärung ist in Textform an den Vorstand
                zu richten.
                <ol>
                  <li>
                    Liegt die Mitgliedschaft noch innerhalb der Mindestdauer, so gilt eine Kündigungsfrist von einem Monat bis zum Ablauf
                    dieser Mindestdauer.
                  </li>
                  <li>
                    Teilhabende Mitglieder können jederzeit unter Einhaltung einer Kündigungsfrist von einem Monat aus dem Verein austreten.{' '}
                  </li>
                </ol>
              </li>
              <li>
                Ein Mitglied kann vom Verein ausgeschlossen werden. Hierzu muss ein wichtiger Grund vorliegen, was insbesondere erfüllt ist
                durch die Vereinsziele schädigendes Verhalten oder die Verletzung satzungsgemäßer Pflichten, einschließlich des geltenden
                Verhaltenskodex.
                <ol>
                  <li>Über den Ausschluss entscheidet der Vorstand mit einfacher Mehrheit.</li>
                  <li>
                    Es besteht die Möglichkeit, gegen den Ausschluss Berufung einzulegen. Der Berufungsantrag ist in Textform binnen eines
                    Monats seit Kenntnisnahme des Ausschlusses an den Vorstand zu richten.
                  </li>
                  <li>
                    Der Vorstand ist verpflichtet, den Berufungsantrag auf die Tagesordnung der nächsten Mitgliederversammlung zu setzen.
                    Diese entscheidet über den Berufungsantrag mit einfacher Mehrheit. Die Entscheidung der Mitgliederversammlung ist
                    bindend.{' '}
                  </li>
                  <li>
                    Die Beschreitung des Rechtsweges gegen die Entscheidung der Mitgliederversammlung hat aufschiebende Wirkung auf den
                    Beschluss.
                  </li>
                  <li>
                    Sollte ein Mitglied mehr als vier Wochen mit der Zahlung der Beiträge im Rückstand sein und trotz schriftlicher Mahnung
                    nicht gezahlt haben, so darf der Vorstand über einen Ausschluss abstimmen. Der Vorstand hat das Recht, auf Anfrage unter
                    Darlegung triftiger Gründe den Beitrag bis zu zwei Monate zu stunden. Die Stundung hat aufschiebende Wirkung auf die
                    Frist von vier Wochen.
                  </li>
                </ol>
              </li>
            </ol>
          </section>
        </section>
        <section id="6">
          <h1>§6 Organe des Vereins</h1>
          <ol>
            <li>
              Die Organe des Vereins sind:
              <ol>
                <li>der Vorstand,</li>
                <li>die Mitgliederversammlung und</li>
                <li>die Revision.</li>
              </ol>
            </li>
            <li>
              Der Verein kann einen nicht bestimmenden Beirat von bis zu 4 Beiratsmitgliedern einrichten. Die Einrichtung und die Wahl eines
              Beirats obliegt der Mitgliederversammlung.
            </li>
            <li>
              Wer ein Amt in einem Organ bekleidet, ist grundsätzlich ehrenamtlich tätig. Abweichungen hiervon bedürfen eines Beschlusses
              der Mitgliederversammlung.
            </li>
            <li>Die Funktionsweise der Organe wird in den nachfolgenden Paragraphen geregelt.</li>
          </ol>
        </section>
        <section id="7">
          <h1>§7 Vorstand</h1>
          <ol>
            <li>
              Der Vorstand besteht aus
              <ol>
                <li>der Vorsitzenden, der stellvertretenden Vorsitzenden und einer Schatzmeister:in,</li>
                <li>sowie auf Beschluss der Mitgliederversammlung bis zu drei weiteren Mitgliedern.</li>
              </ol>
            </li>
            <li>
              Der Verein wird gerichtlich und außergerichtlich vertreten durch zwei Vorstandsmitglieder, von denen eines die Vorsitzende
              oder stellvertretende Vorsitzende sein muss.
            </li>
            <li>
              Der Vorstand ist für die Angelegenheiten des Vereins verantwortlich, sofern sie nicht durch die Satzung einem anderen
              Vereinsorgan zugewiesen sind.
            </li>
            <li>
              Insbesondere ist der Vorstand zuständig für folgende Aufgaben:
              <ol>
                <li>Vorbereitung der Mitgliederversammlung und Aufstellung der entsprechenden Tagesordnung,</li>
                <li>Einberufung der Mitgliederversammlung,</li>
                <li>Ausführung der Beschlüsse der Mitgliederversammlung,</li>
                <li>Beschlussfassung über die Aufnahme, Streichung und Ausschließung von Mitgliedern,</li>
                <li>
                  Verwaltung des Vereinsvermögens, insbesondere die Aufstellung eines Finanzplans für das Geschäftsjahr, Buchführung und
                  Erstellung eines Jahresberichts,
                </li>
                <li>Abschluss und Kündigung von Verträgen und</li>
                <li>Erstellung und Anpassung der Beitragsordnung.</li>
              </ol>
            </li>
            <li>
              Der Vorstand ist befugt, Aufgaben unter seinen Mitgliedern zu verteilen und Ausschüsse für deren Bearbeitung oder Vorbereitung
              einzusetzen.
            </li>
            <li>
              Der Vorstand fasst seine Beschlüsse in Vorstandssitzungen. Diese
              <ol>
                <li>
                  können von jedem Vorstandsmitglied in geeigneter Form einberufen werden. Dabei soll möglichst eine Frist von einer Woche
                  eingehalten werden.
                </li>
                <li>sollen nach Möglichkeit mindestens einmal im Monat stattfinden.</li>
                <li>sind schriftlich zu protokollieren und vom Vorsitzenden zu unterzeichnen.</li>
              </ol>
            </li>
            <li>Die Amtszeit der Vorstandsmitglieder beträgt ein Jahr. Bis zur Bestellung des neuen Vorstands bleiben sie im Amt.</li>
            <li>
              Nur volljährige, aktive Mitglieder, welche natürliche Personen sind, dürfen ein Vorstandsamt bekleiden. Alle
              Vorstandsmitglieder müssen unterschiedliche Personen sein.
            </li>
            <li>
              Bei Beendigung der Mitgliedschaft im Verein endet auch das Amt als Vorstandsmitglied. Mit Zustimmung des restlichen Vorstands
              darf dieses ausscheidende Mitglied ihr Amt bis zum Ende der laufenden Wahlperiode weiter bekleiden.
            </li>
            <li>
              Bei Ausscheiden eines Vorstandsmitglieds während der laufenden Wahlperiode darf der Vorstand ein anderes Vereinsmitglied für
              diese laufende Wahlperiode als Ersatz einsetzen.
            </li>
          </ol>
        </section>
        <section id="8">
          <h1>§8 Mitgliederversammlung</h1>
          <section id="8.1">
            <h2>§8.1 Einladung und Tagesordnung</h2>
            <ol>
              <li>
                Oberstes Organ ist die Mitgliederversammlung. Sie wird grundsätzlich vom Vorstandsvorsitzenden geleitet. Die
                Mitgliederversammlung darf einen neuen Versammlungsleiter mit einfacher Mehrheit wählen.
              </li>
              <li>
                Die Mitgliederversammlung stellt die Richtlinien für die Arbeit des Vereins auf und entscheidet Fragen von grundsätzlicher
                Bedeutung. Zu den Aufgaben der Mitgliederversammlung gehören insbesondere:
                <ol>
                  <li>Wahl, Abwahl und Entlastung des Vorstandes,</li>
                  <li>Wahl der Mitglieder weiterer Gremien,</li>
                  <li>Wahl der Revision,</li>
                  <li>Entgegennahme des Berichts der Revision,</li>
                  <li>Ernennung von Ehrenmitgliedern,</li>
                  <li>Beratung über den Stand und die Planung der Arbeit,</li>
                  <li>Genehmigung des vom Vorstand vorgelegten Finanzplans,</li>
                  <li>Beschlussfassung über den Jahresabschluss,</li>
                  <li>Entgegennahme des Geschäftsberichtes des Vorstandes,</li>
                  <li>Erlass der Beitragsordnung, die nicht Bestandteil der Satzung ist,</li>
                  <li>Beschlussfassung über die Übernahme neuer Aufgaben oder den Rückzug aus Aufgaben seitens des Vereins und</li>
                  <li>Beschlussfassung über Änderungen der Satzung und die Auflösung des Vereins.</li>
                </ol>
              </li>
              <li>
                Eine ordentliche Mitgliederversammlung findet im ersten Quartal eines jeden Geschäftsjahres statt. Sie hat mindestens einmal
                jährlich stattzufinden.
              </li>
              <li>
                Die ordentliche Mitgliederversammlung wird durch den Vereinsvorstand einberufen oder durch einen Antrag von mindestens einem
                Viertel der stimmberechtigten Mitglieder mit einer Begründung, wobei die Vorstände ohne Begründung eine
                Mitgliederversammlung einberufen können. Dies erfolgt schriftlich oder per E-Mail unter Bekanntgabe der Tagesordnung
                spätestens vier Wochen vor dem Versammlungstermin. Für den Nachweis der frist- und ordnungsgemäßen Einladung reicht die
                Absendung der Einladung an die dem Verein zuletzt bekannte E-Mail-Adresse aus.
              </li>
              <li>
                Der Vorstand ist zur Einberufung einer außerordentlichen Mitgliederversammlung verpflichtet, wenn mindestens ein Zehntel der
                stimmberechtigten Mitglieder dies in Textform unter Angabe von Gründen verlangt.
              </li>
              <li>
                Der Vorstand kann auch eine außerordentliche Mitgliederversammlung einberufen, sofern er dies für erforderlich erachtet.
              </li>
              <li>
                Die außerordentliche Mitgliederversammlung muss innerhalb von vier Wochen nach Antragseingang stattfinden; zu ihr ist
                mindestens eine Woche vorher einzuladen oder sie wird durch den Vorstand mit einer Frist von einer Woche einberufen. Auch
                zur außerordentlichen Mitgliederversammlung hat der Vereinsvorstand schriftlich oder per Email unter Bekanntgabe der
                Tagesordnung einzuladen. Die Tagesordnung wird vom Vorstand festgesetzt.
              </li>
              <li>
                Die Tagesordnung ist zudem zu ergänzen, wenn dies ein Mitglied bis spätestens eine Woche vor dem angesetzten Termin einer
                Mitgliederversammlung in Textform beantragt. Die Ergänzung ist zu Beginn der Mitgliederversammlung bekannt zu machen.
              </li>
              <li>
                Anträge über die Abwahl des Vorstands, über die Änderung der Satzung und über die Auflösung des Vereins, die den Mitgliedern
                nicht bereits mit der Einladung zur Mitgliederversammlung zugegangen sind, können erst auf der nächsten
                Mitgliederversammlung beschlossen werden.
              </li>
              <li>
                Die Mitgliederversammlung kann entweder in Person oder virtuell erfolgen. Über die Art der Abhaltung entscheidet der
                Vorstand und teilt dies den Mitgliedern in der Einladung mit. Die Vorschrift des § 32 Abs. 2 BGB bleibt hiervon unberührt.
                Virtuelle Mitgliederversammlungen finden in einer nur für Mitglieder und zugelassene Gäste zugänglichen virtuellen Umgebung
                statt (z.B. Sprach- oder Videochat). Dazu wird eine im Verein gängige Kommunikationssoftware verwendet (z.B. Discord).
              </li>
            </ol>
          </section>
          <section id="8.2">
            <h2>§8.2 Ablauf und Beschlussfassung</h2>
            <ol>
              <li>Die Mitgliederversammlung ist beschlussfähig, wenn mindestens drei Mitglieder anwesend sind.</li>
              <li>
                Der Vorstand kann Gäste zulassen. Über die Zulassung der Presse, des Rundfunks und des Fernsehens sowie einen
                Internetauftritt beschließt der Vorstand.
              </li>
              <li>
                Der Vorstand schlägt eine Schriftführer:in vor, die Mitgliederversammlung stimmt über diese ab und darf neue Kandidierende
                aufstellen.
              </li>
              <li>
                Zur Ausübung des Stimmrechts kann auch ein anderes Mitglied in Textform, z.B. per Email, bevollmächtigt werden. Die
                Bevollmächtigung ist für jede Mitgliederversammlung gesondert zu erteilen. Kein Mitglied darf mehr als drei Mitglieder
                vertreten. Bevollmächtigungen sind möglichst einen Tag vor der Mitgliederversammlung und spätestens vor der ersten
                Abstimmung zu Protokoll zu geben.
              </li>
              <li>
                Bei Abstimmungen entscheidet grundsätzlich die einfache Mehrheit der abgegebenen Stimmen. Wird kein Ergebnis erzielt,
                entscheidet die relative Mehrheit und der Wahlgang wird wiederholt. Wird mit der relativen Mehrheit immer noch kein Ergebnis
                erzielt, wird der Status Quo beibehalten. Sollte die Beibehaltung eines Status Quo nicht möglich sein, wird solange eine
                Wiederwahl durchgeführt, bis eine endgültige Entscheidung getroffen wird.
              </li>
              <li>
                Über die Beschlüsse der Mitgliederversammlung ist Protokoll zu führen. Dieses ist von der Versammlungsleiter:in und der
                Schriftführer:in zu unterzeichnen. Bei Satzungsänderungen ist der genaue, neue Wortlaut der Satzung anzugeben.
              </li>
              <li>
                Die Art der Abstimmung bestimmt die Versammlungsleiter:in. Sofern nichts anderes bestimmt wird, erfolgt die Abstimmung offen
                durch Handmeldung. Auf Antrag eines Mitglieds ist geheim abzustimmen.
              </li>
            </ol>
          </section>
        </section>
        <section id="9">
          <h1>§9 Revision</h1>
          <ol>
            <li>Mindestens ein und höchstens zwei Revisoren werden von der Mitgliederversammlung für die Dauer von einem Jahr gewählt.</li>
            <li>Die Revisoren bleiben solange im Amt, bis neue Revisoren gewählt werden.</li>
            <li>
              Die Revisoren überwachen die Ausgaben und Einnahmen des Vorstands. Zu diesem Zwecke hat der Vorstand den Revisoren Einsicht in
              die Geschäftspapiere, Bücher und Belege zu gewähren.
            </li>
            <li>Revisoren dürfen nicht Mitglied des Vorstands sein.</li>
            <li>Nur stimmberechtigte Mitglieder können Revisoren werden.</li>
          </ol>
        </section>
        <section id="10">
          <h1>§10 Jugendschutzbeauftragter</h1>
          <ol>
            <li>Der Vorstand kann eine Jugendschutzbeauftragte für die Dauer von einem Jahr bestimmen.</li>
            <li>
              Die Jugendschutzbeauftragte dient als erste Ansprechpartner:in für junge Menschen sowie Eltern und Erziehungsberechtigte bei
              Fragen zum eigenverantwortlichen Umgang mit dem Medium Computerspiele. Sie ist weiterhin für die Altersverifikation der
              Mitglieder verantwortlich, um den Schutz vor gefährdenden Einflüssen sicher zu stellen und wirkt auf die Einhaltung der
              Jugendschutzgesetze hin. Bei Veranstaltungen des Vereins berät sie zur altersgerechten Durchführung der Veranstaltung. Sie ist
              bei Veranstaltungen und durch den Verein bereitgestellten Angeboten rechtzeitig zu beteiligen und über das jeweilige Angebot
              vollständig zu informieren. Sie kann dem Verein Beschränkungen oder Änderungen des Angebots vorschlagen.
            </li>
          </ol>
        </section>
        <section id="11">
          <h1>§11 Satzungsänderung</h1>
          <ol>
            <li>
              Über Satzungsänderungen, die Änderung des Vereinszwecks und die Auflösung entscheidet die Mitgliederversammlung. Vorschläge zu
              Satzungsänderungen, Zweckänderungen und zur Auflösung sind den stimmberechtigten Mitgliedern bis spätestens zwei Wochen vor
              der Sitzung der Mitgliederversammlung zuzuleiten.
            </li>
            <li>Für die Beschlussfassung ist eine Mehrheit von drei Vierteln der anwesenden Stimmberechtigten erforderlich.</li>
            <li>
              Änderungen oder Ergänzungen der Satzung, die von der zuständigen Registerbehörde oder vom Finanzamt vorgeschrieben werden,
              werden vom Vorstand umgesetzt und bedürfen keiner Beschlussfassung durch die Mitgliederversammlung. Sie sind den Mitgliedern
              spätestens mit der nächsten Einladung zur Mitgliederversammlung mitzuteilen.
            </li>
          </ol>
        </section>
        <section id="12">
          <h1>§12 Auflösung des Vereins</h1>
          <ol>
            <li>
              Die Auflösung des Vereins kann nur durch eine zu diesem Zweck mit einer Frist von sechs Wochen einberufenen
              Mitgliederversammlung mit drei Viertel Stimmenmehrheit beschlossen werden.
            </li>
            <li>
              Sofern die Mitgliederversammlung nichts anderes beschließt, erfolgt die Liquidation durch den Vorstand. Diese Vorschriften
              gelten entsprechend für den Fall, dass der Verein aus einem anderen Grund aufgelöst wird oder seine Rechtsfähigkeit verliert.
            </li>
            <li>
              Bei Auflösung oder Aufhebung des Vereins fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts
              oder eine andere steuerbegünstigte Körperschaft zwecks Verwendung für die Förderung der Jugendhilfe. Der Vorstand entscheidet
              über den/die Empfänger.
            </li>
          </ol>
        </section>
        <section id="13">
          <h1>§13 Datenschutz</h1>
          <ol>
            <li>
              Zur Erfüllung der Zwecke und Aufgaben des Vereins werden unter Beachtung der gesetzlichen Vorgaben des
              Bundesdatenschutzgesetzes (BDSG) personenbezogene Daten über persönliche und sachliche Verhältnisse der Mitglieder im Verein
              genutzt, gespeichert und übermittelt. Zu diesen gehören unter anderem:
              <ol>
                <li>Name, Vorname,</li>
                <li>Anschrift,</li>
                <li>Geburtsdatum und</li>
                <li>E-Mail-Adresse.</li>
              </ol>
            </li>
            <li>
              Jedes Vereinsmitglied hat das Recht auf:
              <ol>
                <li>Auskunft über die zu seiner Person gespeicherten Daten,</li>
                <li>Berichtigung über die zu seiner Person gespeicherten Daten, wenn sie inkorrekt sind,</li>
                <li>Löschung der zu seiner Person gespeicherten Daten, wenn die Speicherung unzulässig war.</li>
              </ol>
            </li>
            <li>
              Den Organen des Vereins, allen Mitgliedern oder sonst für den Verein Tätigen ist es untersagt, personenbezogene Daten unbefugt
              zu anderen als dem zur jeweiligen Aufgabenerfüllung gehörenden Zweck zu verarbeiten, bekannt zu geben, Dritten zugänglich zu
              machen oder sonst zu nutzen. Diese Pflicht besteht auch über das Ausscheiden der oben genannten Personen aus dem Verein
              hinaus.
            </li>
          </ol>
        </section>
        <section id="14">
          <h1>§14 Haftung</h1>
          <ol>
            <li>
              Ehrenamtlich Tätige, Organ- oder Amtsträger sowie Mitglieder des Vereins, deren Vergütung die Ehrenamtspauschale entsprechend
              § 3 Nr. 26a EStG im Jahr nicht übersteigt, haften für Schäden, die sie in Erfüllung ihrer ehrenamtlichen Tätigkeit
              verursachen, gegenüber dem Verein und seinen Mitgliedern entsprechend § 31 a und b BGB nur bei Vorsatz und grober
              Fahrlässigkeit.
            </li>
            <li>
              Der Verein haftet gegenüber seinen Mitgliedern im Innenverhältnis nicht für fahrlässig verursachte Schäden, die Mitglieder bei
              der Ausübung des Sports, bei Benutzung von Anlagen oder Einrichtungen des Vereins oder bei Vereinsveranstaltungen erleiden,
              soweit solche Schäden nicht durch Versicherungen des Vereins abgedeckt sind.
            </li>
            <li>
              Sind Vereinsmitglieder nach Absatz 1 einem anderen zum Ersatz eines Schadens verpflichtet, den sie bei der Wahrnehmung der
              ihnen übertragenen satzungsgemäßen Vereinsaufgaben verursacht haben, so können sie, außer bei Vorsatz oder grober
              Fahrlässigkeit, entsprechend § 31 b, Absatz 2 BGB vom Verein die Befreiung von der Verbindlichkeit verlangen.
            </li>
          </ol>
        </section>
        <section id="15">
          <h1>§15 Geistiges Eigentum</h1>
          <ol>
            <li>
              Alle beim Betrieb des Vereins entstehenden oder entstandenen Urheber-, Marken- und sonstigen Rechte geistigen Eigentums,
              einschließlich derjenigen in den Abteilungen genutzten, stehen dem Verein als Ganzes zu. Über ihre Verwendung, Nutzung,
              Verwertung und Verteidigung entscheidet der Vorstand.
            </li>
            <li>
              Die generelle Erlaubnis, eigenes aufgenommenes Videomaterial zur Veröffentlichung in den eigenen sozialen Netzwerken zu
              verwenden, ist nur den eigenen aktiven Mitgliedern vorbehalten. Gleichzeitig erwirbt der Vorstand das Recht, Videomaterial
              frei zu verwenden und zu verbreiten.
            </li>
          </ol>
        </section>
        <section id="16">
          <h1>§16 Inkrafttreten</h1>
          Diese Satzung tritt mit Eintragung in das Vereinsregister in Kraft.
        </section>
        <section id="17">
          <h1>§17 Salvatorische Klausel</h1>
          Sollte sich eine einzelne Bestimmung dieser Satzung als unwirksam herausstellen, so bleibt die Wirksamkeit der übrigen
          Bestimmungen unberührt. An Stelle der unwirksamen Bestimmung gilt diejenige rechtswirksame Regelung als gewollt und erklärt, die
          dem Sinn und Zweck der unwirksamen Bestimmung und der gesamten Satzung unter Berücksichtigung von Treu und Glauben am nächsten
          kommt und den allgemeinen Grundsätzen des Vereinsrechts entspricht.
        </section>
        <Button href="/docs/bbe-satzung.pdf" download>
          Button
        </Button>
      </div>
    </BaseTemplate>
  );
};

export default StatutePage;
