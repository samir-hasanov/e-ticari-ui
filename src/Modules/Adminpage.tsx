import axios from "axios";
import { Input, Select, Box, Stack, FormLabel, Button } from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";
import PageContainer from "../Components/lib/PageContainer";
export type typeProduct = { id: number; type: string };
export type typeBrand = { id: number; brand: string };
export type typeSize = { id: number; size: string };
export type typeColor = { id: number; color: string };
export interface IStatus {}

export interface Itype {
  resp: typeProduct[];
  status: IStatus;
}

export interface Ibrand {
  resp: typeBrand[];
  status: IStatus;
}

export interface Isize {
  resp: typeSize[];
  status: IStatus;
}

export interface Icolor {
  resp: typeColor[];
  status: IStatus;
}

const getType = async (): Promise<Itype> =>
  await (await fetch("http://localhost:8085/api/v1.1/getAll")).json();

const getBrand = async (): Promise<Ibrand> =>
  await (await fetch("http://localhost:8085/api/v1.2/getAll")).json();

const getSize = async (): Promise<Isize> =>
  await (await fetch("http://localhost:8085/api/v1.3/getAll")).json();

const getColor = async (): Promise<Icolor> =>
  await (await fetch("http://localhost:8085/api/v1.4/getAll")).json();

const Adminpage = () => {
  const { data: typeproduct } = useQuery(["getType"], getType);
  const { data: brand } = useQuery(["getBrand"], getBrand);
  const { data: sizeproduct } = useQuery(["getSize"], getSize);
  const { data: colorproduct } = useQuery(["getColor"], getColor);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      image: "",
      name: "",
      amount: "",
      price: "",
      serial: "",
      type: "",
      brand: "",
      size: "",
      color: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    const postType = {
      id: data.type,
    };
    const postBrand = {
      id: data.brand,
    };
    const postSize = {
      id: data.size,
    };
    const postColor = {
      id: data.color,
    };
    console.log({
      ...data,
      type: postType,
      brand: postBrand,
      size: postSize,
      color: postColor,
    });
    const tokenAuth = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: "Bearer " + tokenAuth,
      },
    };

    console.log(tokenAuth);

    axios.post(
      "http://localhost:8085/api/v1.0/addProduct",
      {
        ...data,
        type: postType,
        brand: postBrand,
        size: postSize,
        color: postColor,
      },
      axiosConfig
    );
  };

  return (
    <PageContainer>
      <Box width="full" display="flex" justifyContent="center" bg="yellow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            width="300px"
            spacing={20}
            mt={50}
            boxShadow="2px 2px 2px 2px"
            bg="gray"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              width="full"
              mt="5"
              height={40}
              alignItems="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="img"
              >
                Image
              </FormLabel>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Input id="img" {...field} type="file" marginRight={10} />
                )}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="full"
              mt="5"
              height={50}
              alignItems="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="name"
              >
                name
              </FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    id="name"
                    {...field}
                    type="text"
                    placeholder="name"
                    marginRight={10}
                  />
                )}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="full"
              mt="5"
              height={50}
              alignItems="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="amount"
              >
                amount
              </FormLabel>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    id="amount"
                    {...field}
                    type="number"
                    placeholder="amount"
                    marginRight={10}
                  />
                )}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="full"
              mt="5"
              height={50}
              alignItems="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="serial"
              >
                serial
              </FormLabel>
              <Controller
                name="serial"
                control={control}
                render={({ field }) => (
                  <Input
                    id="amount"
                    {...field}
                    type="number"
                    placeholder="serial"
                    marginRight={10}
                  />
                )}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="full"
              mt="5"
              height={50}
              alignItems="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="price"
              >
                price
              </FormLabel>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    id="price"
                    {...field}
                    type="number"
                    placeholder="price"
                    marginRight={10}
                  />
                )}
              />
            </Box>
            <Box
              display="flex"
              width="full"
              height={50}
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="type"
              >
                type
              </FormLabel>

              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Stack {...field} spacing={10}>
                    <Select
                      id="type"
                      placeholder="type"
                      size="md"
                      marginRight={10}
                    >
                      {typeproduct?.resp.map((item, idx) => (
                        <option key={idx} value={item.id}>
                          {item.type}
                        </option>
                      ))}
                    </Select>
                  </Stack>
                )}
              />
            </Box>
            <Box
              display="flex"
              width="full"
              height={50}
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="brand"
              >
                Select brand
              </FormLabel>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <Stack {...field} spacing={10}>
                    <Select
                      id="brand"
                      placeholder="brand"
                      size="md"
                      marginRight={10}
                    >
                      {brand?.resp.map((item, idx) => (
                        <option key={idx} value={item.id}>
                          {item.brand}
                        </option>
                      ))}
                    </Select>
                  </Stack>
                )}
              />
            </Box>
            <Box
              display="flex"
              width="full"
              height={50}
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="size"
              >
                Select size
              </FormLabel>
              <Controller
                name="size"
                control={control}
                render={({ field }) => (
                  <Stack {...field} spacing={10}>
                    <Select
                      id="size"
                      placeholder="size"
                      size="md"
                      marginRight={10}
                    >
                      {sizeproduct?.resp.map((item, idx) => (
                        <option key={idx} value={item.id}>
                          {item.size}
                        </option>
                      ))}
                    </Select>
                  </Stack>
                )}
              />
            </Box>
            <Box
              display="flex"
              width="full"
              height={50}
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel
                paddingLeft={10}
                paddingRight={10}
                fontSize="20px"
                fontWeight="bold"
                htmlFor="color"
              >
                Select Color
              </FormLabel>
              <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <Stack {...field} spacing={10}>
                    <Select
                      id="color"
                      placeholder="color"
                      size="md"
                      marginRight={10}
                    >
                      {colorproduct?.resp.map((item, idx) => (
                        <option key={idx} value={item.id}>
                          {item.color}
                        </option>
                      ))}
                    </Select>
                  </Stack>
                )}
              />
            </Box>
            <Box
              height="40px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ color: "blue" }}
            >
              <Button
                type="submit"
                width="50px"
                height="30px"
                cursor="pointer"
                ml={10}
                bg="blue"
                style={{ color: "black" }}
                fontWeight="bold"
                _hover={{ bg: "red" }}
                border="none"
                borderRadius="10px"
              >
                SAVE
              </Button>

              <Button
                width="50px"
                height="30px"
                cursor="pointer"
                mr={10}
                bg="blue"
                style={{ color: "black" }}
                fontWeight="bold"
                onClick={() => {}}
                _hover={{ bg: "red" }}
                border="none"
                borderRadius="10px"
              >
                CLEAR
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </PageContainer>
  );
};

export default Adminpage;
