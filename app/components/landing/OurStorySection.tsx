// @ts-nocheck
'use client'
import React from "react";
import {Box, Flex, Text, Image, Heading} from "@chakra-ui/react";
import OurStory from "@/app/assets/images/our-story-landing.png";
import {Btn} from "@/app/components/ui/Btn";

export const OurStorySection = () => (
    <Box p={[4, 8, 8]} mb={10}>
        <Flex
            direction={{base: "column", md: "row"}}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mt={10}
        >
            <Flex
                flexDirection="column"
                gap={6}
                pr={{base: 0, md: 8}}
                mb={{base: 4, md: 0}}
                width={{base: "100%", md: "35%"}}
            >
                <Heading
                    fontSize="4xl"
                    fontWeight="bold"
                    mb={2}
                    fontFamily='EB Garamond, serif'
                >
                    Our Story
                </Heading>
                <Text mb={2}>
                    Established in 1950 in the picturesque mountain village of Mtein, Lebanon, our family-owned company
                    has woven a narrative deeply rooted in the distillation of Arak, our national aniseed spirit.
                </Text>
                <Text>
                    Evolving over the years, we have expanded our craft to encompass a diverse spectrum of spirits,
                    wines, and more.
                </Text>
                <Flex w={['100%', '40%', '40%']} mt={4}>
                    <Btn size={'sm'} variant="secondary" text="Discover our legacy"/>
                </Flex>
            </Flex>
            <Box
                width={{base: "100%", md: "50%"}}
                display="flex"
                justifyContent="flex-end"
            >
                <Image
                    src={OurStory.src}
                    alt="Our Story"
                    objectFit="cover"
                    width="600px"
                    height="600px"
                />
            </Box>
        </Flex>
    </Box>
);
