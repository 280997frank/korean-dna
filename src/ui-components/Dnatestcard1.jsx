/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Dnatestcard1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="30px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 5px 15px rgba(0, 0.35686275362968445, 0.886274516582489, 0.10000000149011612)"
      borderRadius="8px"
      padding="60px 47px 60px 47px"
      backgroundColor="rgba(238,245,255,1)"
      {...getOverrideProps(overrides, "Dnatestcard1")}
      {...rest}
    >
      <View
        width="111px"
        height="111px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "mdi:watch-later")}
      >
        <Icon
          width="92.5px"
          height="92.5px"
          viewBox={{ minX: 0, minY: 0, width: 92.5, height: 92.5 }}
          paths={[
            {
              d: "M46.25 0C40.1764 -3.08087e-15 34.1622 1.19629 28.5509 3.52057C22.9396 5.84485 17.841 9.2516 13.5463 13.5463C4.87275 22.2199 8.21565e-15 33.9837 0 46.25C1.02696e-14 58.5163 4.87275 70.2801 13.5463 78.9537C17.841 83.2484 22.9396 86.6552 28.5509 88.9794C34.1622 91.3037 40.1764 92.5 46.25 92.5C58.5163 92.5 70.2801 87.6272 78.9537 78.9537C87.6272 70.2801 92.5 58.5163 92.5 46.25C92.5 40.1764 91.3037 34.1622 88.9794 28.5509C86.6552 22.9396 83.2484 17.841 78.9537 13.5463C74.659 9.2516 69.5604 5.84485 63.9491 3.52057C58.3378 1.19629 52.3236 6.16174e-15 46.25 0ZM65.675 65.675L41.625 50.875L41.625 23.125L48.5625 23.125L48.5625 47.175L69.375 59.6625L65.675 65.675Z",
              fill: "rgba(28,49,159,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="8.34%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Pretendard"
        fontSize="26px"
        fontWeight="500"
        color="rgba(39,39,39,1)"
        lineHeight="31.205078125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.63px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="각 유형별 검사의 질문 응답은 &#xA;8분 이내가 좋습니다."
        {...getOverrideProps(
          overrides,
          "\uAC01 \uC720\uD615\uBCC4 \uAC80\uC0AC\uC758 \uC9C8\uBB38 \uC751\uB2F5\uC740 8\uBD84 \uC774\uB0B4\uAC00 \uC88B\uC2B5\uB2C8\uB2E4."
        )}
      ></Text>
    </Flex>
  );
}
