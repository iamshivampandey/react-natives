import {useState} from 'react';
import { View,Text } from 'react-native';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function Link({page, children}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  return (
    <View>
        <Text
        className={status}
        href={page || '#'}
        >
         shivam {children} account
       </Text>
    </View>
    
  );
}