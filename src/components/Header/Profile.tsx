import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Eduardo Rerick</Text>
        <Text color="gray.300" fontSize="small">eduardorerick@gmail.com</Text>
      </Box>
      )}
      <Avatar size="md" name="Eduardo Rerick" src="https://github.com/eduardorerick.png" />
    </Flex>
  );
}