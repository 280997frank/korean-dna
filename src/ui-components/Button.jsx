/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {ButtonGroup, Flex, Text} from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { button: {}, Button: {} },
      variantValues: { property1: "default_round 4" },
    },
    {
      overrides: { button: {}, Button: { borderRadius: "100px" } },
      variantValues: { property1: "default_round 100" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      // gap="10px"
      // direction="row"
      // width="unset"
      // height="unset"
      // justifyContent="center"
      // alignItems="center"
      // position="relative"
      borderRadius="8px"
      // paddingTop="18px"
      // paddingBottom="10px"
      // padding="0px 40px 0px 40px"
      backgroundColor="rgba(0,91,226,1)"
      // display="flex"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <Text
  // fontFamily="Pretendard"
  // fontSize="16px"
  // fontWeight="600"
  // color="rgba(255,255,255,1)"
  // lineHeight="19.198894500732422px"
  // textAlign="center"
  // display="block"
  // direction="column"
  // justifyContent="unset"
  // letterSpacing="-0.33px"
  // width="unset"
  // height="unset"
  // gap="unset"
  // alignItems="unset"
  // shrink="0"
  // position="relative"
  // padding="0px 0px 0px 0px"
  // whiteSpace="pre-wrap"
  children="tombol"
        {...getOverrideProps(overrides, "button")}
  />
    </Flex>
  );
}
