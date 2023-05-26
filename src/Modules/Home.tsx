import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import PageContainer from "../Components/lib/PageContainer";
import Loading from "../Components/loading/Loading";
import HomeCard from "../Components/HomeCard";
import { useEffect } from "react";

interface IProps {
  id: number;
  image: string;
  name: string;
  amount: number;
  serial: string;
  price: number;
}

export interface IProductStatus {
  code: number;
  msj: string;
}

export interface IProducts {
  resp: IProps[];
  status: IProductStatus;
}

const getProducts = async (): Promise<IProducts> =>
  await (await fetch("http://localhost:8085/api/v1.0/getProducts")).json();

const Home = () => {
  const { isLoading, error, data } = useQuery<IProducts>(
    "getProducts",
    getProducts
  );

  console.log(data);

  if (isLoading) {
    setTimeout(() => {});

    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: 505</div>;
  }

  return (
    <>
      <PageContainer>
        <Grid
          templateColumns="repeat(4, 1fr)"
          columnGap={10}
          rowGap={10}
          mt="5px"
        >
          {data?.resp.map((item, idx) => (
            <HomeCard item={item} />
          ))}
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
