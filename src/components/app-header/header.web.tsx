import React, { memo } from "react";
import Ztext from "react-ztext";
import { View } from "react-native";

import useTranslation from "hooks/useTranslation";

import styles from "./styles.web";

const addNewLineAfterEachWord = (str: string) => {
  return str.split(" ").map((word, index) => (
    <span key={index}>
      {word} <br />
    </span>
  ));
};

const HeaderWithShadow = memo(({ text }: { text: string }) => {
  const headerText = addNewLineAfterEachWord(text);
  return (
    <View style={styles.container} key={text}>
      <Ztext
        depth="0.5rem"
        direction="both"
        event="none"
        eventRotation="0deg"
        eventDirection="default"
        fade={false}
        layers={10}
        perspective="500px"
        style={{
          textAlign: "center",
          color: "#fff",
          fontFamily: "Baloo-ExtraBold",
          fontSize: "3.2em",
          letterSpacing: 6,
          lineHeight: 1,
          textTransform: "uppercase",
          marginTop: "2rem",
          textShadow: "0px 5px #BABABA",
        }}
      >
        {headerText}
      </Ztext>
    </View>
  );
});

const Header: React.FC = () => {
  const { translate } = useTranslation();

  return <HeaderWithShadow text={translate("generalKnowledgeTrivia")} />;
};

export default Header;
