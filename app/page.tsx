export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white text-center mb-2">計算機</h1>
            <div className="bg-gray-900 rounded-lg p-4 text-right">
              <div className="text-gray-500 text-sm h-6 mb-1" id="previous-operand"></div>
              <div className="text-white text-4xl font-light" id="current-operand">0</div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            <button className="calc-btn bg-gray-700 hover:bg-gray-600 col-span-2" data-action="clear">AC</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-action="delete">DEL</button>
            <button className="calc-btn bg-orange-600 hover:bg-orange-500" data-operator="÷">÷</button>
            
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="7">7</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="8">8</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="9">9</button>
            <button className="calc-btn bg-orange-600 hover:bg-orange-500" data-operator="×">×</button>
            
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="4">4</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="5">5</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="6">6</button>
            <button className="calc-btn bg-orange-600 hover:bg-orange-500" data-operator="-">-</button>
            
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="1">1</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="2">2</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number="3">3</button>
            <button className="calc-btn bg-orange-600 hover:bg-orange-500" data-operator="+">+</button>
            
            <button className="calc-btn bg-gray-700 hover:bg-gray-600 col-span-2" data-number="0">0</button>
            <button className="calc-btn bg-gray-700 hover:bg-gray-600" data-number=".">.</button>
            <button className="calc-btn bg-orange-600 hover:bg-orange-500" data-action="equals">=</button>
          </div>
        </div>
      </div>
    </main>
  );
}
