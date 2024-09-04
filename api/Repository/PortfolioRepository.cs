using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;
        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Stock>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios.Where(p => p.AppUserId == user.Id)
            .Select(line => new Stock
            {
                Id = line.StockId,
                Symbol = line.Stock.Symbol,
                Purchase = line.Stock.Purchase,
                LastDiv = line.Stock.LastDiv,
                Industry = line.Stock.Industry,
                MarketCap = line.Stock.MarketCap
            }).ToListAsync();
        }
    }
}