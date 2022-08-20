import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { BiDownArrowCircle } from 'react-icons/bi';

import Image from 'next/image';
import Link from 'next/link';

import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

export const Banner = ({
  purpose,
  imageUrl,
  linkName,
  buttonText,
  title1,
  title2,
  desc1,
  desc2,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} alt="banner" width="300" height="150" />
    <Box p={5}>
      <Text color={'gray.500'} fontSize={'sm'} fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" color="gray.700" marginTop={3} marginBottom={3}>
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize="xl"
        colorScheme="blue"
        rightIcon={<BiDownArrowCircle />}
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose={'For Rent'}
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110798997/d9446cee36ba4f839c8fedd0e0b52208"
      linkName="/search?purpose=for-rent"
      buttonText="Explore Renting"
      title1="Build your 5 Star Resort on the Beach, Palm Jumeirah"
      title2="For Everyone"
      desc1="RARE Opportunity to Build a resort on the Palm Jumeirah with beach access and panoramic sea view 
        You can build 7 floors resort mixed between hotel or hotel apartments
        What the benefits"
      desc2="If you are an investor or International investment company, contact us for full presentation and ready business plan for this opportunity"
    />

    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>

    <Banner
      purpose={'For Sell'}
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110799000/13c5ddeb3710480ab040480678519575"
      linkName="/search?purpose=for-rent"
      buttonText="Explore Renting"
      title1="Build your 5 Star Resort on the Beach, Palm Jumeirah"
      title2="For Everyone"
      desc1="RARE Opportunity to Build a resort on the Palm Jumeirah with beach access and panoramic sea view 
        You can build 7 floors resort mixed between hotel or hotel apartments
        What the benefits"
      desc2="If you are an investor or International investment company, contact us for full presentation and ready business plan for this opportunity"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}

export default Home;
