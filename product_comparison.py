#!/usr/bin/env python3
"""
Product gap analysis - Compare client's desired products with current website inventory
"""

# Current website products (127)
current_products = {
    'Gypsum Board', 'Armstrong Ceiling System', 'Armstrong Ceiling Tiles', 'Rockwool Insulation',
    'Bison Board', 'Calcium Silicate Tile', 'Glasswool Insulation', 'Gyproc Bond It',
    'Gyproc Ceiling Channel', 'Cement Board', 'Floor Sheet', 'GI Ceiling System',
    'Glass Fibre Mesh', 'Ramco Hilux Board', 'Jointing Compound', 'Laminated Ceiling Tile',
    'Mineral Fibre Ceiling', 'Wall Plaster', 'Rapicon Wall Panel', 'Roxul Rockwool Panel',
    'Shera Cement Board', 'Suspension System', 'Thermal Insulation Sheet', 'Vishaka Cement Fibre Board',
    'Decorative Wall Panel', 'Armstrong Beauty Sky RH 90', 'Armstrong ULTIMA', 'Armstrong Prelude T-Grid',
    'Everest Cement Planks', 'Everest Fibre Cement Boards', 'Everest Heavy Duty Board', 'Gyproc Asepta Tiles',
    'Nilkamal Bubble Guard Sheet', 'Nilkamal Bubble Guard Protector', 'Sakarni Gypsum Board',
    'Sakarni POP Channel', 'Shera Deco Board', 'Trimurti Plaster', 'Armstrong Open Cell Ceiling',
    'Ceiling Trap Door', 'Everest Arte Series Grid Ceiling Tiles', 'Gyprex Polyshield Tiles',
    'Knauf Armstrong Ultima OP', 'Shera Plank Board', 'Armstrong Classic Max RH99 Ceiling Tiles',
    'Armstrong Fine Fissured Hi-NRC', 'Gyproc Levelline Flex Corner Tape', 'Gyproc Rigiroc Board',
    'Saint-Gobain Gyproc Glasroc H Board', 'Knauf Armstrong Bioguard Acoustic', 'Knauf Armstrong Bioguard RH100',
    'Armstrong ANF RH95 Mineral Ceiling Tile', 'Armstrong Classic Lite RH 99 Ceiling Tiles',
    'Armstrong False Ceiling', 'Armstrong Optra Acoustical Tiles', 'Armstrong Scala Ceiling Tile',
    'Armstrong Suspended Ceiling Grid', 'Grid Black and White Silhouette System',
    'Gypframe Prima Coupling Bracket', 'Gypframe Prima Perimeter Section',
    'Gyproc Easi Fill Hydro Jointing Compound', 'Gyproc Easi Fill Quick Set Finishing Plaster',
    'Gyproc Fiber Tape', 'Gyproc Glass Fiber Mesh', 'Gyproc Gypblock Board',
    'Gyproc Gypframe Prima Master Angle', 'Gyproc Gypframe Prima Master Section',
    'Gyproc Joint Paper Tape', 'Gyproc Pro Top Ready Mix Jointing Compound',
    'Gyproc Rawl Plug', 'Gyproc Saint Gobain Gypsum Board', 'Gyproc Soffit Cleat',
    'Gyproc Xpert Stucco Gypsum Plaster', 'India Gypsum Board Bharat',
    'Knauf Armstrong AMF Thermatex Feinstratos Micro',
    'Knauf Armstrong Perforated Metal Lay In Ceiling Tiles',
    'Knauf Armstrong Woodworks Grille Tegular', 'Saint Gobain Gyproc Plain Board',
    'Saint Gobain Plain Gypboard Gypsum Ceiling Tile', 'USG Knauf Fireproof Gypsum Boards',
    'USG Knauf Gypsum Board', 'USG Knauf Moisture Resistant Gypsum Board',
    'USG Sheetrock Joint Compound', 'Everest Rapicon Wall Panel 75mm',
    'Bison Wall Panels', 'Black Acoustic Mineral Fiber Ceiling Tile',
    'Everest Cement Rapicon Wall Panel 50mm', 'Fine Fissured Ceiling Tile',
    'Glass Wool Flexible Duct Insulation', 'Glass Wool Roll And Board Ecoinsul',
    'Gyproc Elite 90 Gypsum Plaster', 'Gyproc Gypframe Prima Master Section 250x250',
    'Gyproc Gypserra Ceiling Section', 'Gyproc Rigitone Activ Air Acoustical Board',
    'Gyproc Rigitone Activ Air Super Acoustical Board', 'Gyproc Saint Gobain Rockwool',
    'Gypserra C Stud', 'Gypserra Ceiling Angle', 'Gypserra Ceiling Section',
    'Gypserra Floor And Ceiling Channel', 'Gypserra Intermediate Channel',
    'Gypserra Noggin Channel', 'Gypserra Perimeter Channel', 'Insulated Rock Wool Slab',
    'JK Lakshmi Plaster Of Paris', 'Mineral Fiber Sand Dust Ceiling Tiles',
    'NCL Bison Cement Bonded Particle Board', 'New Lotus RH90 Armstrong',
    'Pinhole Ceiling Tiles', 'Rock Insul RB Slabs', 'Rockwool Insulation LRB Mattress',
    'Rockwool Insulation Slab', 'Rockwool Tuffinsul Slabs', 'Roxul Rockwool Safe N Silent',
    'Saint Gobain Gyproc Supreme 68', 'Saint Gobain Stud', 'Sakarni Gypsum Plaster Of Paris',
    'Stone Wall RR Slab', 'Stone Wool Building Roll', 'USG Boral Eko Lite Ceiling Intermediate',
    'USG Boral Eko Lite Lpatti', 'USG Boral Thundersteel Ceiling Section',
    'USG Boral Thundersteel Intermediate Channel', 'USG Boral Thundersteel Stud',
    'USG Boral Thundersteel U Channel', 'Earth Gypsum Plaster'
}

# Client's desired products organized by brand/category
client_products = {
    'Armstrong': [
        'Armstrong Dune Ceiling Tiles (Max RH99)', 'Armstrong Classic Lite RH99',
        'Armstrong ANF RH95', 'Armstrong False Ceiling', 'Armstrong Scala',
        'Armstrong PRELUDE 24mm T-Grid', 'Knauf Armstrong Perforated Metal Lay-In',
        'Armstrong Suspended Ceiling Grid 15mm', 'Armstrong Open Cell',
        'KNAUF Armstrong Bioguard RH100', 'KNAUF Armstrong Bioguard Acoustic',
        'KNAUF Armstrong ULTIMA', 'KNAUF Armstrong ULTIMA OP',
        'Armstrong Beauty Sky RH 90', 'New Lotus RH90', 'Armstrong Optra Acoustical',
        'Armstrong Classic Max RH99', 'KNAUF Armstrong AMF THERMATEX Feinstratos Micro',
        '15mm Grid Black and White Silhouette System',
        'KNAUF Armstrong WoodWorks Grille Tegular', 'Armstrong FINE FISSURED Hi NRC'
    ],
    'Saint Gobain Gypsum': [
        'India Gypsum Board (Bharat India)', 'Usg Knauf Gypsum Board',
        'Gyproc Saint Gobain Gypsum Board', 'Saint Gobain Plain Gypboard Gypsum Ceiling Tile',
        'Sakarni Gypsum Board', 'Gyproc Gypblock Board', 'Ceiling Trap Door',
        'Saint Gobain Gyproc Plain Board', 'Usg Knauf Moisture Resistant',
        'Usg Knauf Fireproof', 'Knauf Fire Resistant (15mm, 60 min)',
        'Moisture Resistant (9mm, Tapered Edge)',
        'Generic Fire Rated (12.5mm, 30 min)',
        'Gyproc Moisture Resistant (12.5mm, 2440x1220mm)',
        'Gyproc Moisture Resistant (12.5mm, 3000x1200mm)',
        'Gyproc Moisture Resistant (12.5mm, 1830x1220mm)',
        'Gyproc Fire & Moisture Resistant (12.5mm)',
        'Gyproc Moisture Resistant (15mm)', 'Gyproc Fireline (12.5mm, 60 min)',
        'Everest Fiber Cement Board'
    ],
    'Jointing': [
        'Gyproc Easi Fill Quick Set', 'Gyproc Pro-Fill Jointing', 'Glass Fibre Mesh',
        'Gyproc Pro-Top Ready Mix', 'Gyproc Easi Fill Hydro', 'Gyproc Glass Fiber Mesh',
        'Gyproc Easi Fill 90', 'Gyproc Easi-Fill 90', 'Usg Sheetrock Joint',
        'Gyproc Bond It', 'Gyproc Rawl Plug', 'Gyproc Soffit Cleat',
        'Gyproc Levelline Flex Corner', 'Gyproc Joint Paper Tape', 'Gyproc Fiber Tape'
    ],
    'Gypserra Framing': [
        'Gypserra Noggin Channel', 'Gypserra Floor and Ceiling Channel',
        'Gypserra Ceiling Angle', 'Gypserra Ceiling Section',
        'Gypserra Intermediate Channel', 'Gypserra C Stud',
        'Gyproc Gypserra Ceiling Section', 'Gypserra Perimeter Channel',
        'Saint Gobain Stud'
    ],
    'Gypframe Prima': [
        'Gyproc GypFrame Prima Master Angle (25 x 25)',
        'Gyproc Gypframe Prima Master Section',
        'GypFrame Prima Perimeter Section', 'Gypframe Prima Coupling Bracket'
    ],
    'Saint Gobain Plaster Boards': [
        'Saint Gobain Gyproc Core Board', 'Saint Gobain Gyproc Habito Board',
        'Saint Gobain Gyproc Duraline Board', 'Gyproc Fibre Cement Board',
        'Saint Gobain Gyproc Fireline Ceiling Tile', 'Gyproc Rigiroc Board',
        'Saint Gobain Gyproc Glasroc H Board',
        'Saint Gobain Gyproc Moisture Resistant Gypsum Ceiling Tile'
    ],
    'Rigitone': [
        'Saint Gobain Quattro 41', 'Gyproc Rigitone Activ Air 12-20/66',
        'Gyproc Rigitone Activ Air 6/18', 'Gyproc Rigitone Activ Air 12/25Q',
        'Gyproc Rigitone Activ Air 8-15-20 Super', 'Gyproc Rigitone Activ Air 8/18',
        'Gyproc Rigitone Activ Air 8/18Q'
    ],
    'PVC Laminated': [
        'Gyprex PVC Laminated', 'Gyprex Asepta Tiles', 'Gyprex Polyshield Tiles'
    ],
    'Other': ['Gyproc Fultone 12.5mm'],
    'KNAUF India': [
        'USG Boral EKO Lite Ceiling Intermediate', 'Usg Boral Eko Lite Lpatti',
        'USG Boral EKO Lite Ceiling Section', 'USG Boral EKO Lite Perimeter',
        'Usg Boral Thundersteel Ceiling Section',
        'Usg Boral Thundersteel Intermediate Channel',
        'USG Boral Thundersteel Stud', 'USG Boral Thundersteel U Channel'
    ],
    'Bison': [
        'Bison Panel Board', 'Bison Plain Board', 'Bison Wall Panel'
    ],
    'Ramco': [
        'Ramco Hilux Calcium Silicate Board', 'Calcium Silicate Tiles',
        'Aerolite Calcium Silicate Tiles', 'Ramco Hicem Fibre Cement Board'
    ],
    'Everest': [
        'Everest SuperHD Heavy Duty Board', 'Everest Fibre Cement Boards',
        'Everest Arteseries Textured Wall Panel', 'Everest Arteseries Textured Wall Panel',
        'Everest Arteseries Grid Ceiling Tiles', 'Everest Arteseries Cement Wood Panels',
        'Everest Arteseries Textured Wall Panels', 'Everest Drywall Partition',
        'Everest Designer Ceiling Tiles', 'Everest Cement Planks',
        'Everest Artewood Cement Wood Cladding', 'Everest Artestone Wall Cladding'
    ],
    'JK Lakshmi': ['JK Lakshmi Plaster Of Paris'],
    'Sakarni': [
        'Sakarni Gypsum Plaster Of Paris Pop', 'Sakarni Gypsum Board',
        'Sakarni Pop Channel'
    ],
    'Shera': [
        'Shera Fibre Cement Board', 'SHERA Deco Board', 'SHERA Plank Board',
        'SHERA Shiplap Exterior Facading'
    ],
    'Rockwool': [
        'Rockwool Insulation Slab', 'Insulated Rock Wool Slab',
        'Roxul Rockwool Building Roll', 'Roxul Rockwool Safe N Silent',
        'Gyproc Saint Gobain Rockwool', 'Thermal Insulation Sheet',
        'Rock Insul Rb Slabs', 'Rockwool Tuffinsul Slabs',
        'Rockwool Insulation LRB Mattress', 'Glass Wool Roll and Board Ecoinsul',
        'Stone Wool Building Roll', 'Glass Wool Flexible Duct Insulation'
    ],
    'UP Twiga': [
        'Twiga Fiberglass Wool Insulation', 'Glass Wool Roll',
        'Glass Wool Pipe Insulation', 'Stone Wall RR Slab', 'Glass Wool Ceiling Tiles'
    ],
    'Nilkamal': [
        'Nilkamal Floor Protection Bubble Sheet', 'Bubble Guard Floor Protector'
    ],
    'Earth': ['Earth Gypsum Plaster'],
    'Trimurti': ['Trimurti Gypsum Plaster'],
    'Mineral Fiber': [
        'Fine Fissured Ceiling Tile', 'Pin Hole Ceiling Tile',
        'Mineral Fiber Sand Dust Ceiling Tiles', 'Black Acoustic Mineral Fiber Ceiling Tile'
    ],
    'Gypsum Plaster': [
        'Sakarni Gypsum Plaster Of Paris Pop', 'Saint Gobain Gyproc Supreme 68',
        'Trimurti Gypsum Plaster', 'Earth Gypsum Plaster',
        'Gyproc Elite 90 Gypsum Plaster', 'JK Lakshmi Plaster Of Paris',
        'Gyproc Xpert Stucco Gypsum Plaster'
    ],
    'Ceiling Tiles': ['Glass Wool Ceiling Tiles', 'PVC Laminated Gypsum Ceiling Tiles'],
    'Ceiling Channel': ['Sakarni Pop Channel', 'GI Pop Ceiling Channel'],
    'Floor Protection': [
        'Nilkamal Floor Protection Bubble Sheet', 'Bubble Guard Floor Protector'
    ],
    'Rapicon Wall Panel': [
        'Everest Rapicon Wall Panel Partition', 'Bison Wall Panels',
        '75mm Everest Rapicon Wall Panel', 'Everest Cement Rapicon Wall Panel 50mm'
    ]
}

def normalize(name):
    """Normalize product name for comparison"""
    return name.lower().strip().replace('&', 'and')

def find_match(client_name, current_products):
    """Try to find a matching product in current inventory"""
    client_normalized = normalize(client_name)
    
    for current in current_products:
        current_normalized = normalize(current)
        
        # Exact match
        if client_normalized == current_normalized:
            return current
        
        # Partial matches
        if client_normalized in current_normalized or current_normalized in client_normalized:
            return current
    
    return None

# Flatten client products list
all_client_products = []
for brand, products in client_products.items():
    all_client_products.extend(products)

# Remove duplicates in client list
all_client_products = list(set(all_client_products))

# Find missing products
missing_products = []
found_products = []

for client_product in sorted(all_client_products):
    match = find_match(client_product, current_products)
    if match:
        found_products.append((client_product, match))
    else:
        missing_products.append(client_product)

# Organize missing by brand
missing_by_brand = {}
for brand, products in client_products.items():
    brand_missing = []
    for product in products:
        if product in missing_products:
            brand_missing.append(product)
    if brand_missing:
        missing_by_brand[brand] = brand_missing

# Results
print("="*80)
print("PRODUCT GAP ANALYSIS - CEILING HUB PREMIUM")
print("="*80)
print()

print("SUMMARY:")
print(f"Total Products Wanted: {len(all_client_products)}")
print(f"Currently On Website: {len(current_products)}")
print(f"Total Missing: {len(missing_products)}")
print(f"Completion Percentage: {(len(current_products) / len(all_client_products)) * 100:.1f}%")
print()

print("BRAND-BY-BRAND BREAKDOWN (Missing Products):")
print("-" * 80)
for brand in sorted(missing_by_brand.keys()):
    count = len(missing_by_brand[brand])
    print(f"{brand}: {count} missing")
print()

print("COMPLETE MISSING PRODUCTS LIST:")
print("-" * 80)
for i, product in enumerate(sorted(missing_products), 1):
    print(f"{i:2d}. {product}")

print()
print("="*80)
