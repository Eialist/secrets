import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import tokyo from "../assets/tokyo.jpg";
import aibg from "../assets/ai_background.png"
import HeaderComponent from "../components/HeaderComponent";
import InfoComponent from "../components/parallaxComponents/InfoComponent";
import styles from "../styles/styles.module.css";

const ParallaxPage = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />
      <Parallax pages={5}>
        <HeaderComponent />
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}>
          <p className={styles.scrollText}>Parallax Tryout</p>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start"}}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>Test Test</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{zIndex: "1000"}}>
          <div
            style={{
              width: "100%",
              height: "600px",
              backgroundColor: "black",
              color: "white",
              marginTop: "-20em",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            className={`${styles.leftSlide}`}>
            <p style={{ width: "700px", lineHeight: "2em", fontFamily: "Montserrat, sans-serif", fontWeight: "200", fontSize: "1.3em"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}>
          <div
            className={`${styles.card} ${styles.sticky}`}
            style={{
              backgroundImage: `url(${tokyo})`,
              backgroundSize: "100%",
              width: "500px",
              height: "700px",
              marginRight: "20em",
            }}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={.8}
          style={{ ...alignCenter, justifyContent: "flex-end" }}>
          <div
            className={`${styles.card} ${styles.parallax}`}
            style={{
              backgroundImage: `url(${aibg})`, 
              backgroundSize: "100%",
              width: "800px",
              height: "550px",
              marginRight: "12em",
            }}>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 5 }}
          style={{ ...alignCenter, justifyContent: "flex-end" }}>
          <div className={`${styles.card} ${styles.parallax} `}>
            <InfoComponent />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
