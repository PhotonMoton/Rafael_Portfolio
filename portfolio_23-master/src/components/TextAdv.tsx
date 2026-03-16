/*
A simple Text Adventure component created to practice
making api requests using React.  This component will
fetch a random npc that the player can interact with
using a limited number of allowed responses. 
*/
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./TextAdv.css";

function TextAdv() {
  const inputText = useRef<HTMLInputElement>(null);
  const storyText = useRef<HTMLInputElement>(null);
  const npc = useRef<string>("default");
  const [stage, setStage] = useState<number>(1);
  const [hint, setHint] = useState(<span></span>);
  const [pathText, setPathText] = useState<string>("");
  interface StageFive {
    text?: string;
  }

  interface StageFour {
    text?: string;
    stageFive?: StageFive[];
  }

  interface StageThree {
    text?: string;
    stageFour?: StageFour[];
  }

  interface StageTwo {
    text?: string;
    stageThree?: StageThree[];
    stageFour?: StageFour[];
  }

  interface StageOne {
    text?: string;
    stageTwo?: StageTwo[];
  }

  interface Path {
    text?: string;
    stageOne?: StageOne[];
  }
  const [flags, setFlags] = useState({
    dragon: 0,
    sword: 0,
    shield: 0,
    merch: 0,
  });
  const [path, setPath] = useState<Path>({});
  //makes a request for the [first_name] parameter from the random user generater api.
  //each time the request is made a new first name will be generated and stored in [npc].
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users")
      .then((response) => response.json())
      .then((response) => {
        npc.current = response.first_name;
        console.log(response.first_name);
      })
      .catch((error) => console.error(error));
  }, []);

  /*
    Creates the path tree of the game layered into various stages.  
    The path object is dependant on the value of npc.
    Will initially set the [pathText] variable to the first item on the tree. 
    */
  useEffect(() => {
    setTimeout(() => {
      setPath({
        text: "You have been traveling for some time now, on your way to the villiage that last quest giver indicated.  Furthur down the road you see a person walking towards you.",
        stageOne: [
          {
            //you chose to say hi
            text:
              'You say hello. They respond, "Hey! How are you my name is ' +
              npc.current +
              '."',
            stageTwo: [
              {
                //you ask about the village.
                text: "they tell you about the dragon",
                stageThree: [
                  {
                    //say bye
                    text: "You say bye.",
                  },
                  {
                    //You ask where they are going
                    text: "They tell you that they are a merchant and that they have wares, if you have coin. I have swords and shields for sale.",
                    stageFour: [
                      {
                        //Buy Sword
                        text: "You buy a Sword.",
                        stageFive: [
                          {
                            //Buy Shield
                            text: "You buy a Shield",
                          },
                          {
                            //Say bye confident
                            text: "You say goodbye confidently",
                          },
                        ],
                      },
                      {
                        //Buy Shield
                        text: "You buy a Shield.",
                        stageFive: [
                          {
                            //Buy Sword
                            text: "You buy a Sword",
                          },
                          {
                            //Say bye confident
                            text: "You say goodbye confidently",
                          },
                        ],
                      },
                      {
                        //Buy nothing
                        text: "You don't purchase anything and continue on to the villiage. ",
                      },
                    ],
                  },
                ],
              },
              {
                //You ask where they are going
                text: "They tell you that they are a merchant and that they have wares, if you have coin. I have swords and shields for sale.",
                stageThree: [
                  {
                    //Buy Sword
                    text: "You buy a Sword.",
                    stageFour: [
                      {
                        //Buy Shield
                        text: "You buy a Shield",
                      },
                      {
                        //Say bye confident
                        text: "You say goodbye confidently",
                      },
                    ],
                  },
                  {
                    //Buy Shield
                    text: "You buy a Shield.",
                    stageFour: [
                      {
                        //Buy Sword
                        text: "You buy a Sword",
                      },
                      {
                        //Say bye confident
                        text: "You say goodbye confidently",
                      },
                    ],
                  },
                  {
                    //Buy nothing
                    text: "You don't purchase anything and continue on to the villiage. ",
                  },
                ],
              },
              {
                text: "You say bye.",
              },
            ],
          },
          {
            //you chose to ignore the person
            text: "You choose to ignore the person.",
          },
        ],
      });
      setPathText(path.text as string);
    }, 1000);
  }, [npc.current]);
  useEffect(() => {
    setPathText(path.text as string);
  }, [path]);
  //sets the displayed text, flags, and stage based off of what the input text of the player is.
  function sendPath() {
    console.log(inputText.current);
    if (inputText.current) {
      console.log(inputText.current + "gucci");
      const inputValue = inputText.current.value;

      //STAGE 1
      if (inputValue == "Say hi." && stage == 1) {
        setPathText(path?.stageOne?.[0]?.text ?? "woops" ?? "woops");
        setStage((prevStage) => prevStage + 1);
      }
      if (inputValue == "Ignore." && stage == 1) {
        setPathText(path?.stageOne?.[1]?.text ?? "woops");
        setStage(10);
      }

      //STAGE 2
      if (inputValue == "Ask about village." && stage == 2) {
        setPathText(path?.stageOne?.[0]?.stageTwo?.[0]?.text ?? "woops");
        setFlags({ ...flags, dragon: 1 });
      }
      if (inputValue == "Ask about them." && stage == 2) {
        setPathText(path?.stageOne?.[0]?.stageTwo?.[1]?.text ?? "woops");
        setFlags({ ...flags, merch: 1 });
        setStage((prevStage) => prevStage + 1);
      }
      if (inputValue == "Say bye." && stage == 2) {
        setPathText(path?.stageOne?.[0]?.stageTwo?.[2]?.text ?? "woops");
        setStage(10);
      }

      //STAGE 3
      if (inputValue == "Ask about village." && stage == 3) {
        setPathText(path?.stageOne?.[0]?.stageTwo?.[0]?.text ?? "woops");
        setFlags({ ...flags, dragon: 1 });
      }
      //1
      if (inputValue == "Say bye." && stage == 3) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[0]?.text ?? "woops"
        );
        setStage(10);
      }
      if (inputValue == "Ask about them." && stage == 3) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.text ?? "woops"
        );
        setFlags({ ...flags, merch: 1 });
      }
      //2
      if (inputValue == "Buy sword." && stage == 3 && flags.merch == 1) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[0]?.text ?? "woops"
        );
        setFlags({ ...flags, sword: 1 });
      }
      if (inputValue == "Buy shield." && stage == 3 && flags.merch == 1) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[1]?.text ?? "woops"
        );
        setFlags({ ...flags, shield: 1 });
      }
      if (inputValue == "Buy nothing." && stage == 3 && flags.merch == 1) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[2]?.text ?? "woops"
        );
        setStage(10);
      }

      //STAGE 4
      if (inputValue == "Ask about village." && stage == 4) {
        setPathText(path?.stageOne?.[0]?.stageTwo?.[0]?.text ?? "woops");
        setFlags({ ...flags, dragon: 1 });
      }
      //1
      if (inputValue == "Buy sword." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[0]
            ?.text ?? "woops"
        );
        setFlags({ ...flags, sword: 1 });
      }
      if (inputValue == "Buy shield." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[1]
            ?.text ?? "woops"
        );
        setFlags({ ...flags, shield: 1 });
      }
      if (inputValue == "Buy nothing." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[2]
            ?.text ?? "woops"
        );
        setStage(10);
      }

      //2
      if (inputValue == "Buy shield." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[0]?.stageFour?.[0]
            ?.text ?? "woops"
        );
        setFlags({ ...flags, shield: 1 });
      }
      if (inputValue == "Say bye." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[0]?.stageFour?.[1]
            ?.text ?? "woops"
        );
        setStage(10);
      }

      //3
      if (inputValue == "Buy sword." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[1]?.stageFour?.[0]
            ?.text ?? "woops"
        );
        setFlags({ ...flags, sword: 1 });
      }
      if (inputValue == "Say bye." && stage == 4) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[1]?.stageThree?.[1]?.stageFour?.[1]
            ?.text ?? "woops"
        );
        setStage(10);
      }

      //STAGE 5
      //1
      if (inputValue == "Buy sword." && stage == 5) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[0]
            ?.stageFive?.[0]?.text ?? "woops"
        );
        setFlags({ ...flags, sword: 1 });
      }
      if (inputValue == "Say bye." && stage == 5) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[0]
            ?.stageFive?.[1]?.text ?? "woops"
        );
        setStage(10);
      }

      //2
      if (inputValue == "Buy Shield." && stage == 5) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[1]
            ?.stageFive?.[0]?.text ?? "woops"
        );
        setFlags({ ...flags, shield: 1 });
      }
      if (inputValue == "Say bye." && stage == 5) {
        setPathText(
          path?.stageOne?.[0]?.stageTwo?.[0]?.stageThree?.[1]?.stageFour?.[1]
            ?.stageFive?.[1]?.text ?? "woops"
        );
        setStage(10);
      }
    }
  }

  /*
    Once the player has gone through all of the stages. This will
    check the various flags and provide the appropriate ending and append
    the text to the last message.
    It is dependant on the state of the [stage] variable so placed within useEffect
    */
  useEffect(() => {
    console.log(stage);
    if (stage === 10) {
      console.log(flags);
      if (flags.dragon == 0 && flags.sword == 0 && flags.shield == 0) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You arrive at the villiage.  A dragon comes out of nowhere and breathes fire on you. THE END."
        );
      }
      if (flags.dragon == 1 && flags.sword == 0 && flags.shield == 0) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You approach the dragon and suddenly realize you are not prepared for battle.  The dragon laughs and breaths fire on you. THE END."
        );
      }
      if (flags.dragon == 1 && flags.sword == 1 && flags.shield == 0) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You aproach the dragon confidently and slay it with your sword as you dodged it's attack.  You find your quest Item and have dragon scales."
        );
      }
      if (flags.dragon == 1 && flags.sword == 0 && flags.shield == 1) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You aproach the dragon confidently and are able to dodge and block it's attacks as you find your quest item and escape."
        );
      }
      if (flags.dragon == 1 && flags.sword == 1 && flags.shield == 1) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You aproach the dragon confidently but realize that you are over encumbered as the dragon swoops down and breathes it's fire on you. THE END."
        );
      }
      if (flags.dragon == 0 && flags.sword == 1 && flags.shield == 1) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You arrive at the village and are caught offgaurd by a dragon attaack.  You try to dodge but realize that you are over encumbered as the dragon swoops down and breathes it's fire on you. THE END."
        );
      }
      if (flags.dragon == 0 && flags.sword == 0 && flags.shield == 1) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You arrive at the villiage and are attacked by a dragon.  Luckily you were able to block it's attack with your shield and escape with your life.  But you failed your quest."
        );
      }
      if (flags.dragon == 0 && flags.sword == 1 && flags.shield == 0) {
        setPathText(
          (prevPathText) =>
            prevPathText +
            "You arrive at the villiage and are attacked by a dragon.  you are able to cut it's heart and save the village, but it also lands a fatal blow with it's tail. THE END."
        );
      }
      setStage((prevStage) => prevStage + 1);
    }
  }, [stage]);

  //function to return the appropriate hints based on what stage of the game the player is on.
  function sendHint() {
    if (stage == 1) {
      setHint(<a>*You can type: [Say hi.] or [Ignore.]*</a>);
    }
    if (stage == 2) {
      setHint(
        <a>
          You can type: [Ask about village.] or [Ask about them.] or [Say bye.]
        </a>
      );
    }
    if (stage == 3) {
      setHint(
        <a>
          *You can type: [Ask about village.] or [Ask about them.] or [Say bye.]
          or [Buy sword.] or [Buy shield.] or [Buy nothing.]
        </a>
      );
    }
    if (stage == 4) {
      setHint(
        <a>
          *You can type: [Say bye.] or [Buy sword.] or [Buy shield.] or [Buy
          nothing.]
        </a>
      );
    }
    if (stage == 5) {
      setHint(
        <a>
          *You can type: [Say bye.] or [Buy sword.] or [Buy shield.] or [Buy
          nothing.]
        </a>
      );
    }
    if (stage >= 10) {
      setHint(<a>*You have reached the end. Please reload the page.*</a>);
    }
  }

  return (
    <div>
      <h3>A Chance Encounter</h3>
      <div ref={storyText} id="text">
        {pathText}
      </div>
      <br />
      <div id="input" className="container float-start">
        <div className="row gx-1">
          <div className="col-auto">
            <label htmlFor="text-input">&gt;</label>
          </div>
          <div className="col">
            <input ref={inputText} id="text-input" type="text" />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary btn-sm"
              onClick={sendPath}
              id="input-button"
            >
              ENTER
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-secondary btn-sm"
              onClick={sendHint}
              id="hint-button"
            >
              HINT
            </button>
          </div>
        </div>
      </div>
      <br />
      <div id="hint">{hint}</div>
    </div>
  );
}

export default TextAdv;
