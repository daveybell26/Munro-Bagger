// import React, { } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   View, Button,
// } from 'react-native';
// import {
//   Text,
// } from 'react-native-elements';

// import { counterActions } from '../store/counter';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter.counter);
//   const show = useSelector((state) => state.counter.showCounter);

//   const incrementHandler = () => {
//     dispatch(counterActions.increment());
//   };
//   const decrementHandler = () => {
//     dispatch(counterActions.decrement());
//   };

//   const increaseHandler = () => {
//     dispatch(counterActions.increase({ amount: 10 }));
//   };

//   return (
//     <View>
//       <Text h1>Redux Counter </Text>
//       <Text>{counter}</Text>

//       <Button
//         onPress={incrementHandler}
//         title="Increment"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//       <Button
//         onPress={decrementHandler}
//         title="Decrement"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//       <Button
//         onPress={increaseHandler}
//         title="Increase"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />

//       {/* <button onClick={ }>Toggle Counter</button> */}
//     </View>
//   );
// };

// export default Counter;
