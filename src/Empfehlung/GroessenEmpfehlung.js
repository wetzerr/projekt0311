import styles from './empfehlung.module.css';
import React, { useEffect, useState } from 'react';

function GrößenEmpfehlung({ ausgewählteAntworten, sliderValue1, sliderValue2 }) {
  const geschlecht = ausgewählteAntworten[0];
  const schultern = ausgewählteAntworten[2];
  const größeNormal = ausgewählteAntworten[3];
  const größeImmer = ausgewählteAntworten[4];
  const heightValue = sliderValue1;
  const passform = sliderValue2;

  console.log(geschlecht);
  console.log("Größe :", heightValue);
  console.log(schultern);
  console.log(größeNormal);
  console.log(größeImmer);
  console.log(passform);

  // Logik für die empfohlene Größe basierend auf den Antworten

  let empfohleneGröße = '';
  if (
    geschlecht === 'Männlich' &&
    heightValue < '170' &&
    schultern === 'schmal' &&
    (größeNormal === 'XS' || größeNormal === 'S') &&
    (größeImmer === 'Ja' || größeImmer === 'Nein, manchmal eine Größe kleiner') &&
    passform === 'Figurbetont'
  ) {
    empfohleneGröße = 'S';
  } else if (
    geschlecht === 'Männlich' &&
    heightValue >= '170' &&
    schultern === 'durchschnitt' &&
    größeNormal === 'M' &&
    passform === 'Etwas Lockerer'
  ) {
    empfohleneGröße = 'M';
  } else {
    empfohleneGröße = 'Keine Empfehlung';

    keineEmpfehlung = false;
  }

  if (!keineEmpfehlung) {
    console.log("good");
  }

  return (
    <div>
      <p className={styles.empfehlung}>{empfohleneGröße}</p>
    </div>
  );
}

export let keineEmpfehlung;
export default GrößenEmpfehlung;
