// Demonstrating basic TypeScript types in a user profile context
function createUserProfile(
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    joinDate: Date,
    interests?: string[],  // Optional parameter
    metadata: Record<string, any> = {}  // Default parameter
  ): { id: number; displayName: string; status: string } {
    
    const status = isActive ? 'active' : 'inactive';
    const displayName = `${name} (${age})`;
    
    console.log(`User joined on: ${joinDate.toLocaleDateString()}`);
    
    if (interests && interests.length > 0) {
      console.log(`User interests: ${interests.join(', ')}`);
    }
    
    return { id, displayName, status };
  }
  
// Usage
const profile = createUserProfile(
    1001,
    'Jane Doe',
    28,
    true,
    new Date('2023-01-15'),
    ['coding', 'hiking', 'photography']
);

console.log(profile);