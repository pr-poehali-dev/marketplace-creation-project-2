import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const drinks = [
    { id: 1, name: 'MATRIX ENERGY', price: 299, oldPrice: 399, description: 'Зеленый энергетик с вкусом лайма', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
    { id: 2, name: 'CYBER COLA', price: 199, oldPrice: 249, description: 'Кола с кибер-вкусом', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
    { id: 3, name: 'NEON JUICE', price: 349, oldPrice: 449, description: 'Светящийся сок с витаминами', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
    { id: 4, name: 'TERMINAL TEA', price: 149, oldPrice: 199, description: 'Черный чай для хакеров', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
    { id: 5, name: 'CODE COFFEE', price: 249, oldPrice: 299, description: 'Кофе для программистов', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
    { id: 6, name: 'HACKER WATER', price: 99, oldPrice: 149, description: 'Вода для взлома систем', image: '/img/fa4f57b6-d5de-4724-a783-d8057e1a264d.jpg' },
  ];

  const addToCart = (drink: {id: number, name: string, price: number}) => {
    const existingItem = cart.find(item => item.id === drink.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === drink.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...drink, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-green-400/20 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Terminal" className="text-green-400 text-glow" size={32} />
            <h1 className="text-2xl font-bold text-glow">DARKNET MARKET</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400/10 hover-glow"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-2">{getTotalItems()}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ff0010_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl font-bold mb-6 text-glow animate-pulse">
            > ДОБРО ПОЖАЛОВАТЬ_
          </h2>
          <p className="text-xl mb-8 text-green-300">
            Премиальные напитки для хакеров и киберпанков
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
              <Icon name="Lock" size={16} className="mr-2" />
              АНОНИМНО
            </Badge>
            <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
              <Icon name="Zap" size={16} className="mr-2" />
              БЫСТРО
            </Badge>
            <Badge variant="outline" className="border-green-400 text-green-400 px-4 py-2">
              <Icon name="Shield" size={16} className="mr-2" />
              БЕЗОПАСНО
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-glow">
            [КАТАЛОГ_ТОВАРОВ]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink) => (
              <Card key={drink.id} className="bg-black/50 border-green-400/30 hover:border-green-400 transition-all duration-300 hover-glow">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-to-br from-green-400/20 to-black rounded-lg mb-4 flex items-center justify-center">
                    <img src={drink.image} alt={drink.name} className="w-full h-full object-cover rounded-lg opacity-80" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-green-400 text-glow text-lg">{drink.name}</CardTitle>
                      <CardDescription className="text-green-300/70 text-sm mt-2">{drink.description}</CardDescription>
                    </div>
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-400/30">
                      -25%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{drink.price}₽</span>
                      <span className="text-sm text-gray-500 line-through">{drink.oldPrice}₽</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => addToCart(drink)}
                    className="w-full bg-green-400 text-black hover:bg-green-300 font-bold hover-glow"
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    В КОРЗИНУ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-md bg-black border-l border-green-400/30 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-green-400 text-glow">КОРЗИНА</h3>
              <Button variant="ghost" onClick={() => setCartOpen(false)}>
                <Icon name="X" className="text-green-400" size={24} />
              </Button>
            </div>
            {cart.length === 0 ? (
              <p className="text-green-300/70 text-center py-8">Корзина пуста</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-green-400/20 rounded">
                      <div>
                        <h4 className="text-green-400 font-semibold">{item.name}</h4>
                        <p className="text-green-300/70 text-sm">{item.quantity} × {item.price}₽</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-bold">{item.quantity * item.price}₽</span>
                        <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                          <Icon name="Trash2" className="text-red-400" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-green-400/20 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-green-400">ИТОГО:</span>
                    <span className="text-2xl font-bold text-green-400 text-glow">{getTotalPrice()}₽</span>
                  </div>
                  <Button className="w-full bg-green-400 text-black hover:bg-green-300 font-bold hover-glow">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    ОФОРМИТЬ ЗАКАЗ
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-black to-green-400/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-glow">
            [СВЯЗЬ_С_НАМИ]
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/50 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 text-glow text-center">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-green-300 mb-2 font-semibold">Email:</label>
                  <Input 
                    type="email" 
                    className="bg-black/50 border-green-400/30 text-green-400 focus:border-green-400 focus:ring-green-400/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-green-300 mb-2 font-semibold">Сообщение:</label>
                  <Textarea 
                    className="bg-black/50 border-green-400/30 text-green-400 focus:border-green-400 focus:ring-green-400/20 min-h-[120px]"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <Button className="w-full bg-green-400 text-black hover:bg-green-300 font-bold hover-glow">
                  <Icon name="Send" size={16} className="mr-2" />
                  ОТПРАВИТЬ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Terminal" className="text-green-400" size={24} />
            <span className="text-green-400 font-bold text-glow">DARKNET MARKET</span>
          </div>
          <p className="text-green-300/70 text-sm">
            © 2024 Darknet Market. Все права защищены.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge variant="outline" className="border-green-400/30 text-green-400">
              <Icon name="Lock" size={12} className="mr-1" />
              SSL
            </Badge>
            <Badge variant="outline" className="border-green-400/30 text-green-400">
              <Icon name="Shield" size={12} className="mr-1" />
              ANON
            </Badge>
            <Badge variant="outline" className="border-green-400/30 text-green-400">
              <Icon name="Zap" size={12} className="mr-1" />
              FAST
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;