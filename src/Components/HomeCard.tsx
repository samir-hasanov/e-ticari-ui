import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Heading,
} from "@chakra-ui/react";
import { formatCurrency } from "../utils/formatCurrency";
interface IProps {
  id: number;
  image: string;
  name: string;
  amount: number;
  serial: string;
  price: number;
}
interface IP {
  item: IProps;
}

const HomeCard: React.FC<IP> = ({ item }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          width="100%"
          src="C:\Users\samir\OneDrive\Masaüstü\aploadserver"
          objectFit="cover"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="18px" fontWeight="bold">
            {formatCurrency(item.price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default HomeCard;
