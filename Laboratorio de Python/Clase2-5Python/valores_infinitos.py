import math
from decimal import Decimal
# Manejo de valores infinitos
infinito_positivo = float('inf')
print(f'Infinito positivo: {infinito_positivo}')
print(f'Es infinito?: {math.isinf(infinito_positivo)}')

infinito_negativo = float('-inf')
print(f'Infinito negativo: {infinito_negativo}')
print(f'Es infinito?: {math.isinf(infinito_negativo)}')

# Modulo math
infinito_positivo = math.inf
print(f'Infinito positivo: {infinito_positivo}')
print(f'Es infinito: {math.isinf(infinito_positivo)}')

infinito_negativo = -math.inf
print(f'Infinito negativo: {infinito_negativo}')
print(f'Es infinito: {math.isinf(infinito_negativo)}')

# Modulo decimal
infinito_positivo = Decimal('Infinity')
print(f'Infinito Positivo: {infinito_positivo}')
print(f'Es infinito: {math.isinf(infinito_negativo)}')

infinito_negativo = Decimal('-Infinity')
print(f'Infinito negativo: {infinito_negativo}')
print(f'Es infinito: {math.isinf(infinito_negativo)}')