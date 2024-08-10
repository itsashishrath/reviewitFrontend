import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const UserProfile = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Recent Activity</h3>
        <ul className="list-disc pl-5">
          {user.recentActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UserProfile;