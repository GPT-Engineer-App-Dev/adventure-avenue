import { Container, Text, VStack, Box, Heading, Button, Image, SimpleGrid, Card, CardBody, CardFooter } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Discover and book amazing travel experiences around the world.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Start Your Journey</Button>
        <Heading as="h2" size="xl" mt={10}>Travel Alternatives</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={6}>
          <Card>
            <CardBody>
              <Heading size="md">Guided Trip</Heading>
              <Text mt={4}>Explore the city with an experienced guide. Prices start from $100.</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="teal">Book Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Heading size="md">Hotel Deals</Heading>
              <Text mt={4}>Stay at the best hotels with exclusive deals. Prices start from $150 per night.</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="teal">Book Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Heading size="md">Adventure Tours</Heading>
              <Text mt={4}>Join adventure tours for an exhilarating experience. Prices start from $200.</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="teal">Book Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Heading size="md">Luxury Packages</Heading>
              <Text mt={4}>Indulge in luxury travel packages. Prices start from $500.</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="teal">Book Now</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;