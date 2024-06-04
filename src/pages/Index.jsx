import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, Card, CardBody, CardFooter, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Discover and book amazing travel experiences around the world.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/simple-travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <Text fontSize="lg" mt={6} color="brand.800" as={Link} href="#">Start Your Journey</Text>
        <Heading as="h2" size="xl" mt={10}>Travel Alternatives</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={6}>
          <Card>
            <CardBody>
              <Image src="/images/guided-trip.jpg" alt="Guided Trip" borderRadius="md" />
              <Heading size="md" mt={4}>Guided Trip</Heading>
              <Text mt={4}>Explore the city with an experienced guide. Prices start from $100.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/hotel-deals.jpg" alt="Hotel Deals" borderRadius="md" />
              <Heading size="md" mt={4}>Hotel Deals</Heading>
              <Text mt={4}>Stay at the best hotels with exclusive deals. Prices start from $150 per night.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/adventure-tours.jpg" alt="Adventure Tours" borderRadius="md" />
              <Heading size="md" mt={4}>Adventure Tours</Heading>
              <Text mt={4}>Join adventure tours for an exhilarating experience. Prices start from $200.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/luxury-packages.jpg" alt="Luxury Packages" borderRadius="md" />
              <Heading size="md" mt={4}>Luxury Packages</Heading>
              <Text mt={4}>Indulge in luxury travel packages. Prices start from $500.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;