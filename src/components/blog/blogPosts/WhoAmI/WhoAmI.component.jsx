import React from "react";
import ModifiedHeader from "../../../modifiedHeader/modifiedHeader.component";

import Iceberg from "../../../../assets/images/Iceberg.jpg";
import GreekGod from "../../../../assets/images/GreekGod.jpg";
import escalatorFail from "../../../../assets/gifs/escalatorFail.gif";

import {PostContainer} from "../generalStyles.styles";
import {
  ParagraphContainer,
  PictureContainer,
  GeneralLink,
} from "./WhoAmI.styles";
import {BodyContainer} from "../FirstPost/FirstPost.styles";

const FirstPost = () => {
  return (
    <>
      <ModifiedHeader/>
      <BodyContainer>


        <PostContainer>
          <ParagraphContainer>
            <p>04.07.2020</p>
            <h3>Short version</h3>
            <p>-An health educated person</p>
            <p>-Nerd</p>
            <p>-Daily reader</p>
            <p>-Yoga man</p>
            <p>-Fitness guy</p>
            <p>
              -A "the body is your temple" guy so be carefull what you put there
            </p>
            <p>-A nice guy to meet</p>
            <p>
              -A politics curious(and in Romania oooh man there are a lot of
              curious things)
            </p>
            <p>
              -An economy curious person and a future investor(yeah I'm broke
              right now).
            </p>
            <p>-An "only cold showers" guy.</p>
            <p>
              Basically I am called by family now to help them with medicine and
              health problems AND to fix their computer.
            </p>
            <h3>Long version:</h3>
            <p>
              -Pharmacy school is like learning the bottom part of the iceberg to
              use only the top part
            </p>
            <PictureContainer src={Iceberg} alt="Iceberg picture"/>
            <p>
              -I am a daily reader of
              <GeneralLink
                to={{pathname: "https://https://www.notebookcheck.net//"}}
                target="_blank"
              >
                notebookcheck
              </GeneralLink>
              and all other tech influencers.
            </p>
            <p>
              -I read daily. 30 minutes. Books. You would say it's not a lot but
              one book a month in 3 years it's 36 books. And each book it's like
              adding a new or faster RAM memory to the brain. You just work
              better. Top 5: Atomic habits, 21 lessons for the 21st Century,
              Sapiens, Homo Deus, Unshakeable.
            </p>
            <p>
              -YOGA ! Please, please start doing this as fast as you can. This
              thing gets out of my sistem all the back/leg pain from sitting and
              after felling like a rock who wants to do gimnastics for 30-60
              minutes, I feel like a greek god
            </p>
            <PictureContainer src={GreekGod} alt="Greek God Picture"/>
            <p>
              - I was obssed with fitness for 5 years and I can say that for a guy
              it's a must. The fact that you have muscles helps you with self
              esteem and in society in general. You girls don't really need it
              that much unless you want to be "buff". For a good physique there
              are better things for girls (yoga&cardio).
            </p>
            <p>
              - I'm a supplements curious person (not whey protein) but things
              that make your mind in particular(and also your body) work better.
              This is a huge topic, maybe another post.
            </p>
            <p>
              - I try to help each person I know with what I can do. Sometimes you
              just have to give back.
            </p>
            <p>
              - I hate and love and hate politics. The world is run by it and it's
              so damn complicated and evil that I wish a computer with a lot of if
              else statements would do them. But in Romania they really are
              responsible for your tomorrow and if you want for you and your
              parents to live a decent life I would suggest you to be interested .
            </p>
            <p>
              -After reading Unshakeable - Tony Robbins(read it) I realised that
              keeping large amounts of money in the bank or cash is like trying to
              go up the first floor of the mall on the escalator that everybody
              uses to come down. But investing it's like going on the right one.
              If you also walk you arrive much faster, if you stay you still
              arrive. Also I read
              <GeneralLink
                to={{
                  pathname: "https://www.morningbrew.com/daily/r/?kid=86b527b3",
                }}
                target="_blank"
              >
                The Morning Brew
              </GeneralLink>
              (thanks
              <GeneralLink
                to={{pathname: "https://www.rusu.io/"}}
                target="_blank"
              >
                Cosmin Rusu
              </GeneralLink>
              )
            </p>
            <PictureContainer src={escalatorFail} alt="Escalator Fail"/>
            <p>
              -The research on cold showers(thanks
              <GeneralLink
                to={{pathname: "https://www.rusu.io/"}}
                target="_blank"
              >
                Cosmin Rusu
              </GeneralLink>
              ) is strong. Only good things ! But they suck when you do them. But
              you feel incredible after. I do them mainly because I want to get
              myself out of the comfort zone any time I can . It takes about 2-3
              weeks to get used to them in case you start but want to stop.
            </p>
            <h2>Each bullet deserves a post for itself. They will follow soon</h2>
          </ParagraphContainer>
        </PostContainer>
      </BodyContainer>
    </>
  );
};

export default FirstPost;
