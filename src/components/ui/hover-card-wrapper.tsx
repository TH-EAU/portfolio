import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

const HoverCardWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box
            rounded="md"
            background="linear-gradient(143deg,rgba(238, 62, 62, 1) 20%, rgba(9, 34, 255, 1) 59%, rgba(60, 255, 0, 1) 79%)"
            backgroundPosition="0% 0%"
            backgroundSize="300% 300%"
            overflow="hidden"
            transition="1.8s ease"
            _hover={{
                backgroundPosition: "100% 100%",
                zIndex: 9,
                transform: "skew(3deg, 0deg) rotate(-3deg)"
            }}
            h="full"
            w="full"
        >
            <Box h="full" w="100%" transition="1s" _hover={{ opacity: .8 }} >
                {children}
            </Box>
        </Box>
    )
}

export default HoverCardWrapper