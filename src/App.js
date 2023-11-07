import './App.css';
import React, { useState } from 'react'
import styles from './Geschlecht/frage1.module.css'
import styles2 from './Größe/frage2.module.css'
import styles3 from './Schultern/frage3.module.css'
import styles4 from './Normalerweise/frage4.module.css'
import styles5 from './Passform/frage5.module.css'
import Slider from './Größe/Slider'
import SliderPassform from './Passform/SliderPassform';
import styles6 from './Empfehlung/empfehlung.module.css'
import styles35 from './GrößeImmer/frage35.module.css'
import GrößenEmpfehlung from './Empfehlung/GroessenEmpfehlung'
import { keineEmpfehlung } from './Empfehlung/GroessenEmpfehlung';

function App() {

  const [fragen, setFragen] = useState([
    {
      text: 'WÄHLE DEIN BIOLOGISCHES GESCHLECHT',
      antworten: [
        { text: 'Männlich', klasse: styles.antwortbuttonfrage11 },
        { text: 'Weiblich', klasse: styles.antwortbuttonfrage12 },
      ],
    },
    {
      text: 'DEINE GRÖßE',
      antwort: '',
    },
    {
       text: 'DEINE SCHULTERN',
      antworten: [
        { text: 'schmal', klasse: styles2.antwortbuttonfrage3 },
        { text: 'durchschnitt', klasse: styles2.antwortbuttonfrage3 },
        { text: 'breit', klasse: styles2.antwortbuttonfrage3 },
      ], // Hier wird die Antwort als Zahl gespeichert 
    },
    {
      text: 'DIESE GRÖßE TRÄGST DU NORMALWEISE',
      antworten: [
        { text: 'XS', klasse: styles3.antwortbuttonfrage4},
        { text: 'S', klasse: styles3.antwortbuttonfrage4 },
        { text: 'M', klasse: styles3.antwortbuttonfrage4},
        { text: 'L', klasse: styles3.antwortbuttonfrage4},
        { text: 'XL', klasse: styles3.antwortbuttonfrage4},
      ], // Hier wird die Antwort als Zahl gespeichert
    },
    {
      text: 'TRÄGST DU IMMER DIESE GRÖßE',
      antworten: [],
    },
    {
      text: 'DIESE PASSFORM BEVORZUGST DU',
      antworten: [],
    },
    {
      text: 'EMPFOHLENE GRÖßE',
      antworten: [],
    },
  ]);

  const [ausgewählteAntworten, setAusgewählteAntworten] = useState(Array(fragen.length).fill(null));
  const [frageIndex, setFrageIndex] = useState(0);
  const [quizAngezeigt, setQuizAngezeigt] = useState(false);
  const [größe, setGröße] = useState(null); // Hier wird die Größe gespeichert// Hier Slider-Wert initialisieren
  const [sliderPassValue, setSliderPassValue] = useState(2);
  const [größe2, setGröße2 ] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("cm");
  const [quizGeschlossen, setQuizGeschlossen] = useState(false);
  
   // Funktion zum Umschalten der Einheit zwischen "cm" und "ftin"
  const handleUnitChange = () => {
    setSelectedUnit(selectedUnit === "cm" ? "ftin" : "cm");
  };
  
  const handleTextKlick = () => {
    // Wenn der Text geklickt wird, zeige das Quiz an
    setQuizAngezeigt(true);
    setFrageIndex(0);
  };


  const nächsteFrage = () => {
    setTimeout(() => {
      // Füge Logik hinzu, um zur nächsten Frage zu wechseln
    
      // Bedingung für das Setzen von größe2 (Slider-Wert für Passform)
      if (frageIndex === 5) {
        let passformValue = '';
        
        switch (sliderPassValue) {
          case '0':
            passformValue = 'Locker';
            break;
          case '1':
            passformValue = 'Etwas Lockerer';
            break;
          case '2':
            passformValue = 'Regulär';
            break;
          case '3':
            passformValue = 'Etwas Enger';
            break;
          case '4':
            passformValue = 'Figurbetont';
            break;
          default:
            passformValue = sliderPassValue;
            break;
        }
        
        setGröße2(passformValue);
      }
      
    
     // Füge ein Delay von 1000 Millisekunden (1 Sekunde) hinzu
    // Erhöhe immer den Index, es sei denn, du hast spezielle Bedingungen
    setFrageIndex(frageIndex + 1);
    }, 400);
  };
  
  const zurückFrage = () => {
    if (frageIndex < fragen.length) {
      setFrageIndex(frageIndex - 1);
    } else {

    }
  };

  const handleAntwortKlick = (antwort) => {
    const neueAusgewählteAntworten = [...ausgewählteAntworten];
    neueAusgewählteAntworten[frageIndex] = antwort;
    setAusgewählteAntworten(neueAusgewählteAntworten);
    if (frageIndex + 1< fragen.length) {
      setFrageIndex(frageIndex + 1);
    }
  };

  const handleErsteFrageAntwort = (antwort) => {
    const neueAusgewählteAntworten = [...ausgewählteAntworten];
    neueAusgewählteAntworten[0] = antwort;
  
    setAusgewählteAntworten(neueAusgewählteAntworten);
  
    nächsteFrage();
  };
  
  const handleDritteFrageAntwort = (antwort) => {
  
    const neueAusgewählteAntworten = [...ausgewählteAntworten];
    neueAusgewählteAntworten[2] = antwort;
  
    setAusgewählteAntworten(neueAusgewählteAntworten);
  
    nächsteFrage();
  };

  const handleVierteFrageAntwort = (antwort) => {
    
    const neueAusgewählteAntworten = [...ausgewählteAntworten]; // Erstelle eine Kopie des aktuellen Zustands
    neueAusgewählteAntworten[3] = antwort; // Speichere die ausgewählte Antwort in ausgewählteAntworten[3]
    
    setAusgewählteAntworten(neueAusgewählteAntworten); // Aktualisiere den Zustand mit der neuen Antwort
  
    nächsteFrage(); // Gehe zur nächsten Frage
  };

  const handle3halbeFrageAntwort = (antwort) => {
    const neueAusgewählteAntworten = [...ausgewählteAntworten]; // Erstelle eine Kopie des aktuellen Zustands
    neueAusgewählteAntworten[4] = antwort; // Speichere die ausgewählte Antwort in ausgewählteAntworten[3]
    
    setAusgewählteAntworten(neueAusgewählteAntworten); // Aktualisiere den Zustand mit der neuen Antwort
  
    nächsteFrage(); // Gehe zur nächsten Frage
  }

  const handleSliderChange1 = (newValue) => {
    setSliderPassValue(newValue);
    // Hier können Sie die Logik hinzufügen, die Sie beim Ändern des Sliders ausführen möchten
  };

  const closeQuiz = () => {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.style.display = 'none';
    setQuizAngezeigt(false);
  };

  const restartQuiz = () => {
    setFrageIndex(0);
  }

  const handleQuizSchließen = () => { 
    setQuizAngezeigt(false);
    setQuizGeschlossen(true);
  } 

  return (
   <>
      {!quizAngezeigt && !quizGeschlossen && (
        <div>
          <div className='io'></div>
          <button className="start-text" onClick={handleTextKlick}>DEINE PASSENDE GRÖßE</button>
          <img src='/images/Kleiderbuegel.png' className='kleiderbuegel' onClick={handleTextKlick}></img>
        </div>
      )}
      {quizAngezeigt && (  
        <>
         <div id="overlay" className='overlay'></div>
          <div className='quiz-container'>
            {frageIndex < fragen.length && (
              <div>
                {frageIndex > 0 && frageIndex < 6 && (
                  <div className='closex-backarrow'>
                    <img src='/images/back-arrow.webp' id='backarrow' onClick={zurückFrage} alt='zurück'></img>
                    <img src='/images/closeX.webp' id='closex' onClick={closeQuiz} alt='close'></img>
                  </div>
                )}
                {frageIndex === 0 && (
                    <> 
                        <div className={styles.divider}>
                          <img src='/images/closeX.webp' className={styles.closex} onClick={closeQuiz} alt='close'></img>
                          <h1 className={styles.h1}>WIR HELFEN DIR DEINE PASSENDE GRÖßE ZU FINDEN</h1>
                          <p className={styles.line}></p>
                        </div>
                        <h2 className={styles.frage1}>DEIN BIOLOGISCHES GESCHLECHT</h2>
                        <button className={styles.antwortbuttonfrage11} onClick={() => handleErsteFrageAntwort('Männlich')}>Männlich</button>
                        <button className={styles.antwortbuttonfrage12} onClick={() => handleErsteFrageAntwort('Weiblich')}>Weiblich</button>
                        <p className={styles.poweredby}>Powered by <span className={styles.span}>boehm.IO</span></p>
                    </>
                )}
                {frageIndex === 1 && (
                  <div>
                        <h2 className={styles2.frage2}>DEINE KÖRPERGRÖßE</h2>
                        <div className={styles2.ContainerSwitchEinheiten}>
                          <label className={styles2.switch}>
                            <span className={styles2.einheitenCm}>cm</span>
                            <input 
                              type= "checkbox"
                              checked={selectedUnit === "ftin"}
                              onChange={handleUnitChange}
                            />                          
                            <span className={styles2.sliderEinheit}></span>
                            <span className={styles2.einheitenFtin}>ft in</span>
                          </label>
                        </div>
                    <Slider value={größe} onSliderChange={(newValue) => setGröße(newValue)} unit={selectedUnit}/>
                    <button className={styles2.weiterButton} onClick={nächsteFrage}>Weiter</button>
                    <img src='/images/arrowRight1.png' className={styles2.arrowRight} alt='weiter' onClick={nächsteFrage}></img> 
                    <p className={styles2.poweredby}>Powered by <span className={styles2.span}>boehm.IO</span></p>
                  </div>
                )}
                {frageIndex === 2 && (
                  <div>
                      <h1 className = {styles3.frage3}>DEINE SCHULTERN</h1>
                      <img src='/images/schmal.png' className= {styles3.schulternbild} alt='schmal' onClick={() => handleDritteFrageAntwort('schmal')}></img>
                      <img src='/images/durchschnitt.png' className= {styles3.schulternbild} alt='durchschnitt'  onClick={() => handleDritteFrageAntwort('durchschnitt')}></img>
                      <img src='images/breit.png' className={styles3.schulternbild} alt='breit-bild'  onClick={() => handleDritteFrageAntwort('breit')}></img>
                      <button className={styles3.antwortbuttonfrage3} onClick={() => handleDritteFrageAntwort('schmal')}>schmal</button>
                      <button className= {styles3.antwortbuttonfrage3} onClick={() => handleDritteFrageAntwort('durchschnitt')}>durchschnitt</button>
                      <button className ={styles3.antwortbuttonfrage3} onClick={() => handleDritteFrageAntwort('breit')}>breit</button>
                      <p className={styles3.poweredby}>Powered by <span className={styles3.span}>boehm.IO</span></p>
                    </div>
                )}       
                {frageIndex === 3 && (
                  <div>
                    <h1 className= {styles4.frage4}>DIESE GRÖßE TRÄGST DU NORMALWEISE</h1>
                    <button className={styles4.antwortbuttonfrage4} onClick= {() => handleVierteFrageAntwort('XS')}>XS</button>
                    <button className={styles4.antwortbuttonfrage4} onClick= {() => handleVierteFrageAntwort('S')}>S</button>
                    <button className={styles4.antwortbuttonfrage4} onClick= {() => handleVierteFrageAntwort('M')}>M</button>
                    <button className={styles4.antwortbuttonfrage4} onClick= {() => handleVierteFrageAntwort('L')}>L</button>
                    <button className={styles4.antwortbuttonfrage4} onClick= {() => handleVierteFrageAntwort('XL')}>XL</button>          
                    <h2 className= {styles4.frage45}>TRÄGST DU IMMER DIESE GRÖßE</h2>
                    <p className={styles4.poweredby}>Powered by <span className={styles4.span}>boehm.IO</span></p>  
                  </div>
                )}
                {frageIndex === 4 && (
                  <div>
                    <h1 className= {styles35.frage35}> DU TRÄGST IMMER GRÖßE {ausgewählteAntworten[3]}</h1>
                    <button className={styles35.antwortbutton}onClick={() => handle3halbeFrageAntwort('Nein, manchmal eine Größe kleiner')}>Nein, manchmal eine Größe kleiner</button>
                    <button className={styles35.antwortbutton}onClick={() => handle3halbeFrageAntwort('Ja')}>Ja</button>
                    <button className={styles35.antwortbutton}onClick={() => handle3halbeFrageAntwort('Nein, manchmal eine Größe größer')}>Nein, manchmal eine Größe größer</button>
                    <p className={styles35.poweredby}>Powered by <span className={styles35.span}>boehm.IO</span></p>
                  </div>

                )}
                {frageIndex === 5 && (
                    <div>
                      <h1 className={styles5.frage5}>DIESE PASSFORM BEVORZUGST DU</h1>
                      <div className={styles5.stricheInsg}>
                        <p className={styles5.striche} id={styles5.strich1}>|</p>
                        <p className={styles5.striche}>|</p>
                        <p className={styles5.striche}>|</p>
                        <p className={styles5.striche}>|</p>
                        <p className={styles5.striche} id={styles5.strich1}>|</p>
                      </div>
                      <SliderPassform value={größe2} onChange={handleSliderChange1}/>    
                      <button className={styles5.weiterButton} onClick={nächsteFrage}>Weiter</button>
                      <img src='/images/arrowRight1.png' className={styles5.arrowRight} alt='weiter' onClick={nächsteFrage}></img>                 
                      <p className={styles5.poweredby}>Powered by <span className={styles5.span}>boehm.IO</span></p>
                    </div>
                )}
                {frageIndex === 6 && (
                    <div>
                      <h3 className={styles6.empfG}>Empfohlene Größe:</h3>
                      <GrößenEmpfehlung 
                        sliderValue1={größe}
                        sliderValue2={größe2}
                        ausgewählteAntworten={ausgewählteAntworten}
                      />
                      <button className={styles6.quizSchliessen} onClick={handleQuizSchließen}>QUIZ SCHLIESSSEN</button>
                      <button className={styles6.vonVorne} onClick={restartQuiz}>VON VORNE BEGINNEN</button>
                      <p className={styles6.poweredby}>Powered by <span className={styles6.span}>boehm.IO</span></p>
                    </div>
                )}
              </div>
            )}
          </div>
        </>    
      )}     
      {!quizAngezeigt && quizGeschlossen && (
        <div>
          <button className='suggestion' onClick={handleTextKlick}>WIR EMPFEHLEN DIR DIE GRÖßE <GrößenEmpfehlung 
                        sliderValue1={größe}
                        sliderValue2={größe2}
                        ausgewählteAntworten={ausgewählteAntworten}
                      /></button>
        </div>
      )}
      {!quizAngezeigt && quizGeschlossen && (
        <div>
          <button>WIR<GrößenEmpfehlung 
                        sliderValue1={größe}
                        sliderValue2={größe2}
                        ausgewählteAntworten={ausgewählteAntworten}
                      /></button>
        </div>
      )}
    </>
  );
}  

export default App;