using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Stock
{
    public class UpdateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot be over 10 characters long")]
        public string Symbol { get; set; } = string.Empty;

        [Required]
        [MaxLength(10, ErrorMessage = "Company Name cannot be over 10 characters long")]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(1, 10000000000, ErrorMessage = "Price must be between 1$ and 10000000000$")]
        public decimal Purchase { get; set; }

        [Required]
        [Range(0.001, 100, ErrorMessage = "Dividend must be between 0.001$ and 100$")]
        public decimal LastDiv { get; set; }

        [Required]
        [MaxLength(10, ErrorMessage = "Industry cannot be over 10 characters long")]
        public string Industry { get; set; } = string.Empty;

        [Required]
        [Range(1, 5000000000, ErrorMessage = "Market Cap should be between 1$ and 5000000000$")]
        public long MarketCap { get; set; }
    }
}