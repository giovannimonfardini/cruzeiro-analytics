import React from 'react';
import Logo from './components/Logo';
// Removemos a importação do CSS padrão e do logo SVG padrão
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          {/* Usamos o componente Logo personalizado em vez do SVG padrão */}
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-2">
            Cruzeiro Analytics
          </h1>
          <p className="text-lg text-gray-600">
            Dashboard de análise de times de futebol
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de estatísticas */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Estatísticas do Time
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Partidas jogadas</span>
                  <span className="font-medium text-gray-800">38</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Vitórias</span>
                  <span className="font-medium text-green-600">24</span>
                </div>
              </div>
            </div>

            {/* Card de próximos jogos */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Próximos Jogos
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">vs. Atlético</p>
                    <p className="text-sm text-gray-500">Domingo, 15:30</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card de jogadores */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Destaques
              </h2>
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-gray-50 rounded-md">
                  <div className="h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    10
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Carlos Silva</p>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Gols: 14</span>
                      <span className="text-sm text-gray-500">Assist: 8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">
              Ver análise completa
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;