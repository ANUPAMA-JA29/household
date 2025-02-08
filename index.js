tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell, ShoppingCart, Clock, ChefHat, Package, Plus, Search } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Dashboard = () => {
  const [inventoryItems] = useState([
    { id: 1, name: 'Milk', quantity: 2, expiryDate: '2025-02-15', category: 'Dairy' },
    { id: 2, name: 'Bread', quantity: 1, expiryDate: '2025-02-10', category: 'Bakery' },
    { id: 3, name: 'Tomatoes', quantity: 4, expiryDate: '2025-02-12', category: 'Produce' },
    { id: 4, name: 'Chicken', quantity: 1, expiryDate: '2025-02-09', category: 'Meat' }
  ]);

  const [suggestedRecipes] = useState([
    { id: 1, name: 'Chicken Sandwich', ingredients: ['Chicken', 'Bread', 'Tomatoes'] },
    { id: 2, name: 'Tomato Soup', ingredients: ['Tomatoes', 'Cream'] }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NestEase</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-6 w-6" />
                <span>Add Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quickly add new items to your inventory</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-6 w-6" />
                <span>Search Inventory</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Find items and check their status</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ChefHat className="h-6 w-6" />
                <span>Recipe Suggestions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get personalized recipe ideas</p>
            </CardContent>
          </Card>
        </div>

        {/* Expiring Soon Alert */}
        <Alert className="mb-8 bg-yellow-50 border-yellow-200">
          <Clock className="h-5 w-5 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            3 items are expiring within the next week
          </AlertDescription>
        </Alert>

        {/* Inventory Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Expires: {item.expiryDate}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {item.quantity} left
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recipe Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestedRecipes.map(recipe => (
                  <div key={recipe.id} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium flex items-center space-x-2">
                      <ChefHat className="h-4 w-4 text-green-600" />
                      <span>{recipe.name}</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Uses: {recipe.ingredients.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
