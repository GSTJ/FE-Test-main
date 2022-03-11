import 'react-native-gesture-handler/jestSetup';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockMaterialCommunityIcons = () => null;
mockMaterialCommunityIcons.default = mockMaterialCommunityIcons;
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => mockMaterialCommunityIcons,
);

jest.mock('axios-hooks');
