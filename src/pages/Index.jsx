// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaBookOpen, FaUserSecret, FaGlobeAmericas } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Image src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteXN0ZXJpb3VzJTIwZm9nZ3klMjBmb3Jlc3R8ZW58MHx8fHwxNzEzNjA0NjU5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Mysterious Forest" />
        <Heading as="h1" size="2xl" textAlign="center">
          Mysteries Unveiled
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Dive into the depths of the unexplained and non-coincidental mysteries that have been kept hidden from the public eye.
        </Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaBookOpen />} colorScheme="teal" variant="solid">
            Read Articles
          </Button>
          <Button leftIcon={<FaUserSecret />} colorScheme="orange" variant="outline">
            About the Unknown
          </Button>
          <Button leftIcon={<FaGlobeAmericas />} colorScheme="purple" variant="ghost">
            Explore Worldwide Mysteries
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
