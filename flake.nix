{
  description = "ENGUI";
  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs =
    { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
	  name = "engui-environment";
          buildInputs = [
            pkgs.nodejs_20
          ];
          shellHook = ''
            export PS1="[\033[0;34mengui-nix\033[0m] $PS1"
            export IN_NIX_SHELL=true
          '';
        };
      });
    };
}
