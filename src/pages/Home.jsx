import React from "react";
import "./style/Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>
        India's Best Website <br /> to Learn Programming for Indian Students{" "}
        <br />& in Indian Language
      </h1>
      <div className="homeBtnBox">
        <button
          onClick={() => {
            window.location = "/javascript-hindi";
          }}
          className="jsBtn homeBtn"
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            window.location = "/react-hindi";
          }}
          className="reactBtn homeBtn"
        >
          React
        </button>

        <button
          onClick={() => {
            window.location = "/html-hindi";
          }}
          className="htmlBtn homeBtn"
        >
          HTML
        </button>

        {/* {/* <button className="cssBtn homeBtn">CSS</button> */}
        {/* <button className="pythonBtn homeBtn">Python</button> */}
        {/* <button className="cBtn homeBtn">C</button> */}
        {/* <button className="cppBtn homeBtn">C++</button>  */}
        <button
          onClick={() => {
            window.location = "/personality-development-tutorial";
          }}
          className="highValueBtn homeBtn"
        >
          High Value Room
        </button>
      </div>
      <div className="homeTable">
        <h2>Productivity Hack</h2>
        <table>
          <tr>
            <th>8 Hour</th>
            <th>8 Hour</th>
            <th>8 Hour</th>
          </tr>
          <tr>
            <th>Sleep</th>
            <th>Work/Passion/Study</th>
            <th>To Yourself</th>
          </tr>
          <tr>
            <td>Extremely necessary.</td>
            <td>
              To accomplish this, right after a good night's sleep, set your
              daily goal to complete the 8 hours of work as efficiently & as
              soon as possible to experience that dopamine rush. The moment you
              achieve this, you'll feel like you've won something.
            </td>
            <td>
              Here, you actually have a lot of time to do almost everything you
              want to do.
            </td>
          </tr>
          <tr>
            <td>Enhances memory consolidation and learning.</td>
            <td>
              After completing those 8 hours of hard work, you will experience a
              very high degree of self-satisfaction, knowing that you did what
              you could and gave your 100% for the day.
            </td>
            <td>1 hour for health goals</td>
          </tr>
          <tr>
            <td>
              Reduces risk of mood disorders, such as depression and anxiety.
              Improves mood and increases overall sense of well-being.
            </td>
            <td>
              Some days, after successfully completing those 8 hours, you will
              feel so energized that you end up doing an extra 1 hour, sometimes
              2-3 hours extra. That is sufficient for whatever you are pursuing.
            </td>
            <td>
              1.5 hours for food (Take your food with some entertainment so you
              don't crave entertainment while working )
            </td>
          </tr>
          <tr>
            <td>Strengthens your immune system.</td>
            <td>
              You can do this in shifts or in one Go (shifts work better).{" "}
            </td>
            <td>1.5 hours for your body</td>
          </tr>
          <tr>
            <td>
              Regulates our appetite hormones, supporting weight management.
            </td>
            <td>
              2 Shifts of 4 hours <span className="clrRed">Or</span> 3 Shifts of
              3 - 3 - 2 hours.
            </td>
            <td>30 minutes for your hobbies</td>
          </tr>
          <tr>
            <td>
              Increases release of growth hormone, crucial for tissue repair and
              muscle growth.
            </td>
            <td>
              Take a complete day off from this once a week if possible, and do
              something fun.{" "}
            </td>
            <td>
              15-30 minutes: Try writing down your thoughts; it's the best way
              to clear your mind.
            </td>
          </tr>
          <tr>
            <td>
              Maintenance of hormonal balance, including cortisol and melatonin.
            </td>
            <td>
              <span className="clrRed">Note:</span> regardless of the life phase
              you find yourself in—be it as a student, a professional, a
              homemaker, or in any role— anyone who desires three meals a day
              with dignity, needs to put in at least 8 hours of work. So accept
              it and if you have the chance to work on something you're
              passionate about, seize the opportunity and stop daydreaming.
            </td>
            <td>
              You still have 3 hours left to do whatever you want. Spend it with
              your family, friends, loved ones, or on social media.
            </td>
          </tr>
          <tr>
            <th>Have Patience</th>
            <th>Don't Kill Yourself</th>
            <th>Have a life</th>
          </tr>
        </table>
        {/* <p>
          Most of the time, we are in a marathon but often run it like a sprint,
          leading to burnout. So, don't do that. Don't exhaust yourself. Have a
          life. Great things take time; exercise patience. Many times,
          comparison undermines patience, so avoid comparing. We all have
          different stories and actually when you write down 10 things you want
          for yourself you will realize we all want very different things out of
          life so there's no point comparing yourself to anyone in wrong way.{" "}
        </p> */}
        {/* <p>
        Elon Musk had three different girlfriends while building three companies.
          One very important thing you should push into your head that no matter
          whatever phase of life you are in or will be in like you are a school
          student or college student, working somewhere , housewife or house
          husband, thief, criminal, gangster, mafia etc. in whatever role a
          human is if you want food 3 times a day with respect you have to work
          for 8 hours any ways So if you have got apportunity to work on
          something you are interested in then work stop day dreaming
        </p> */}
      </div>
    </div>
  );
}
