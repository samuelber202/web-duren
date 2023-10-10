/* eslint-disable react/prop-types */
import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';

const ChakraAlert = ({ status, title, description, onClose }) => {
  return (
    <Alert status={status} variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
      <AlertIcon boxSize="40px" mr={0} />
      {title && <AlertTitle mt={4} mb={1} fontSize="lg">{title}</AlertTitle>}
      {description && <AlertDescription maxWidth="sm">{description}</AlertDescription>}
      <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
    </Alert>
  );
};

export default ChakraAlert;
