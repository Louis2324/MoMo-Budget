import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Input Types' }} 
      />
      <Tabs.Screen 
        name="form" 
        options={{ title: 'Budget Form' }} 
      />
    </Tabs>
  );
}