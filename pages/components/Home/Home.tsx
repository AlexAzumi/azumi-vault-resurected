import React, { FC, useEffect, useState } from 'react';
import ScrollForMore from './components/ScrollForMore';

const PRESENTATION_TEXT = 'Hola, mi nombre es';
const NAME_TEXT = 'Alejandro Suárez';

interface DisplayTextArgs {
  text: string;
  updateText: React.Dispatch<React.SetStateAction<string>>;
  removeTrail?: boolean;
  onFinish?(): void;
}

interface TrailingEfectArgs {
  updateText: React.Dispatch<React.SetStateAction<string>>;
}

const Home: FC = () => {
  const [presentationText, setPresentationText] = useState('_');
  const [nameText, setNameText] = useState('_');
  const [showScrollForMore, setShowScrollForMore] = useState(false);

  useEffect(() => {
    const displayText = ({
      text,
      updateText,
      removeTrail,
      onFinish,
    }: DisplayTextArgs) => {
      let currentIndex = 0;

      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          updateText(value => value.replace('_', text[currentIndex] + '_'));
        } else {
          clearInterval(timer);

          if (onFinish) onFinish();
          // Delete remaining trail if necesarry
          if (removeTrail) {
            updateText(value => value.substring(0, value.length - 1));
          }
        }

        currentIndex++;
      }, 80);
    };

    const trailingEffect = ({ updateText }: TrailingEfectArgs) => {
      let showTrailing = false;

      setInterval(() => {
        if (showTrailing) {
          updateText(NAME_TEXT + '_');
        } else {
          updateText(NAME_TEXT);
        }

        showTrailing = !showTrailing;
      }, 600);
    };

    displayText({
      text: PRESENTATION_TEXT,
      updateText: setPresentationText,
      removeTrail: true,
      onFinish: () =>
        displayText({
          text: NAME_TEXT,
          updateText: setNameText,
          onFinish: () => {
            trailingEffect({ updateText: setNameText });
            // Show in a few seconds
            setTimeout(() => {
              setShowScrollForMore(true);
            }, 2000);
          },
        }),
    });
  }, []);

  return (
    <div className='home'>
      <div id='home' className='fake-header' />
      <h2 className='display-4 text-primary'>{presentationText}</h2>
      <h1 className='display-2 font-weight-bold name-title'>{nameText}</h1>
      <h5 className='text-info text-right title-text-fade-in'>
        Tecnólogo en Desarrollo de Software
      </h5>

      <ScrollForMore show={showScrollForMore} />
    </div>
  );
};

export default Home;
