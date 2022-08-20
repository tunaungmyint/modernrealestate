import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import DefaultImage from '../assets/images/noresult.jpg';
import { GoVerified } from 'react-icons/go';
import { Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap={'wrap'}
        width={320}
        p={5}
        paddingTop={0}
        cursor="pointer"
        justifyContent="flex-start"
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            alt="houses"
            width={300}
            height={160}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight={3} color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontSize="lg" fontWeight="bold">
                {price}0 Ks {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p="1"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths}
            <FaBath /> | {millify(area)} စတုရန်းပေ <BsGridFill />
          </Flex>
          <Text>
            {title.length > 25 ? `${title.substring(0, 25)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
