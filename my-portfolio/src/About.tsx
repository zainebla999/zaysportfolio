import aboutDoodle from "./assets/aboutDoodle.png";
export default function About() {
  return (
    <div id="aboutSection" className="aboutSection flex flex-row pb-14">
      <div className="aboutLeft flex-2">
        <h2>ABOUT ME</h2>
        <br></br>
        <br></br>
        <p>
          I've always been drawn to problem-solving, which sparked my interest
          in networking and eventually led me to cybersecurity. Self-learning
          has been a big part of my journey. <br></br>
          <br></br>To impress recruiters, I tried filming a video and the
          marketing team took me on board. That's when I first held a
          professional camera. I got so excited about my first marketing project
          that I spent a whole week learning from YouTube. I challenged myself
          to learn OOP, and funny enough, I only really understood it after the
          course was over. Troubleshooting might take days, but when things
          finally work, I feel like an engineer. Somehow, I've always just
          gotten assembly language and even enjoyed it (yeah, weird, I know.)
          <br></br> <br></br>These days, I'm building interfaces, creating
          visual content, and figuring out how to make tech work better for
          people. Whether I’m coding, designing, or behind a camera, I’m always
          focused on learning, building, and solving problems.
        </p>
      </div>
      <div className="aboutRight flex-1 content-center ">
        <img src={aboutDoodle} className="h-80 block  m-auto" alt="" />
      </div>
    </div>
  );
}
