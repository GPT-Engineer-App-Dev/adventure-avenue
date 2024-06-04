import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, Card, CardBody, CardFooter, Link, Flex, HStack, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        {/* Navigation Bar */}
        <Flex as="nav" w="100%" justify="space-between" align="center" py={4} px={8} bg="brand.900" color="white" borderRadius="md">
          <Heading as="h1" size="lg">Travel Booking</Heading>
          <HStack spacing={4}>
            <Button variant="link" color="white" href="#">Home</Button>
            <Button variant="link" color="white" href="#">Destinations</Button>
            <Button variant="link" color="white" href="#">About</Button>
            <Button variant="link" color="white" href="#">Contact</Button>
          </HStack>
        </Flex>

        {/* Main Content */}
        <Heading as="h2" size="2xl" mb={4} color="brand.800">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center" color="brand.700">Discover and book amazing travel experiences around the world.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/simple-travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <Text fontSize="lg" mt={6} color="brand.800" as={Link} href="#">Start Your Journey</Text>
        <Heading as="h3" size="xl" mt={10} color="brand.800">Travel Alternatives</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={6}>
          <Card>
            <CardBody>
              <Image src="/images/guided-trip.jpg" alt="Guided Trip" borderRadius="md" />
              <Heading size="md" mt={4} color="brand.800">Guided Trip</Heading>
              <Text mt={4} color="brand.700">Explore the city with an experienced guide. Prices start from $100.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/hotel-deals.jpg" alt="Hotel Deals" borderRadius="md" />
              <Heading size="md" mt={4} color="brand.800">Hotel Deals</Heading>
              <Text mt={4} color="brand.700">Stay at the best hotels with exclusive deals. Prices start from $150 per night.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/adventure-tours.jpg" alt="Adventure Tours" borderRadius="md" />
              <Heading size="md" mt={4} color="brand.800">Adventure Tours</Heading>
              <Text mt={4} color="brand.700">Join adventure tours for an exhilarating experience. Prices start from $200.</Text>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" color="brand.800" as={Link} href="#">Read More</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image src="/images/luxury-packages.jpg" alt="Luxury Packages" borderRadius="md" />
              <Heading size="md" mt={4} color="brand.800">Luxury Packages</Heading>
              <Text mt={4} color="brand.700">Indulge in luxury travel packages. Prices start from $500.</Text>
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