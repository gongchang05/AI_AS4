// ── SnackStore ─────────────────────────────────────────────
// Shared localStorage helper for SnackBurn.
// Automatically resets the snack log when the calendar day changes.

const SnackStore = (function () {
  const KEY = 'snackburn_data';

  function todayStr() {
    return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
  }

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || { date: todayStr(), snacks: [] };
    } catch {
      return { date: todayStr(), snacks: [] };
    }
  }

  function write(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  // Returns today's snacks, auto-clearing if the stored date is stale.
  function getToday() {
    const data = read();
    if (data.date !== todayStr()) {
      const fresh = { date: todayStr(), snacks: [] };
      write(fresh);
      return fresh.snacks;
    }
    return data.snacks;
  }

  function addSnack(snack) {
    const data = read();
    if (data.date !== todayStr()) {
      data.date = todayStr();
      data.snacks = [];
    }
    data.snacks.unshift(snack);
    write(data);
    return data.snacks;
  }

  function removeSnack(id) {
    const data = read();
    data.snacks = data.snacks.filter(s => s.id !== id);
    write(data);
    return data.snacks;
  }

  function clearDay() {
    write({ date: todayStr(), snacks: [] });
  }

  function getTotal() {
    return getToday().reduce((sum, s) => sum + (s.calories || 0), 0);
  }

  return { getToday, addSnack, removeSnack, clearDay, getTotal };
})();
