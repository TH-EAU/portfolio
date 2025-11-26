import { Container, Heading, Stack, IconButton, Center, HStack, Box, Image, Drawer, Tag } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";
import FadeInWrapper from "../ui/fade_in_wrapper";



const PageLayout: React.FC<{ caption: string, pageName: string, tags?: string[], description: string, children: ReactNode }> = ({ pageName, caption, tags, description, children }) => {
    return (
        <>
            <Box position="relative">
                <Image position="absolute" h={300} w="full" zIndex={-1} src={caption} />
                <Box position="absolute" backdropFilter="blur(3px)" bgGradient="to-b" gradientFrom={{ base: "#FFF5", _dark: "#1115" }} gradientTo={{ base: "white", _dark: "#111" }} h={300} w="full" zIndex={-1} />
                <Container zIndex={2}>
                    <FadeInWrapper>
                        <Center p={32}>
                            <Stack gap={8} textAlign="center" >
                                <HStack align="center">
                                    <Drawer.CloseTrigger asChild>
                                        <IconButton
                                            backgroundColor="#1115"
                                            backdropFilter="blur(10px)"
                                            p={3}
                                            rounded="full"
                                            overflow="hidden"
                                            border="1px solid #2225"
                                            size="2xl"
                                            variant="ghost" >
                                            <FiArrowLeft />
                                        </IconButton>
                                    </Drawer.CloseTrigger>
                                    <Heading lineHeight={1} fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} fontWeight="normal"   >{pageName}</Heading>

                                </HStack>
                                <Heading fontSize="xl" fontWeight="normal"  >{description}</Heading>
                                <HStack justify="center" wrap="nowrap" >
                                    {tags?.map((t) => <Tag.Root key={t}>
                                        <Tag.Label>{t}</Tag.Label>
                                    </Tag.Root>)}
                                </HStack>
                            </Stack>
                        </Center>
                    </FadeInWrapper>
                    <Container maxW="4xl" >
                        <Stack gap={8}>
                            {children}
                        </Stack>
                    </Container>
                </Container>
            </Box>
        </>
    )
}

export default PageLayout